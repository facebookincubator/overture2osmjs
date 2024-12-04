import fs from "fs";
import brain from "brain.js";
import addresses from "../sampleData/addresses.json" assert { type: "json" };

const vocab = [];
let minPostcode = Infinity;
let maxPostcode = -Infinity;

// Helper function for logging warnings
function logWarning(message) {
    console.warn(`Warning: ${message}`);
}

// Build vocabulary and calculate min/max postcode
if (addresses && addresses.length > 0) {
    addresses.forEach((address) => {
        const fields = [
            address.overture.freeform,
            address.overture.locality,
            address.overture.postcode,
            address.overture.state,
            address.overture.region,
            address.overture.country,
        ];

        fields.forEach((field) => {
            if (field && typeof field === "string" && field.trim() !== "") {
                if (!vocab.includes(field)) {
                    vocab.push(field);
                }
            }
        });

        // Calculate min and max for postcode
        if (address.overture.postcode) {
            const postcode = parseInt(address.overture.postcode.replace("-", ""), 10);
            if (!isNaN(postcode)) {
                minPostcode = Math.min(minPostcode, postcode);
                maxPostcode = Math.max(maxPostcode, postcode);
            }
        }
    });
} else {
    console.error("No valid addresses found in the sample data.");
    process.exit(1);
}

// Save vocabulary to a file
fs.writeFileSync("models/vocab.json", JSON.stringify(vocab));
console.log("Vocabulary:", vocab);

// Encode features
function encodeFeature(feature, vocab) {
    const encoded = Array(vocab.length).fill(0);
    const index = vocab.indexOf(feature);
    if (index !== -1) {
        encoded[index] = 1;
    } else {
        logWarning(`Unknown feature: "${feature}". Encoding as zero.`);
    }
    return encoded;
}

// Normalize numerical values
function normalize(value, min, max) {
    if (max === min) {
        return 0.5; // Return a neutral value for equal min and max
    }
    return (value - min) / (max - min);
}

// Prepare training data with validation
function prepareTrainingData(data) {
    return data.map((address, index) => {
        if (typeof address.isValid !== "boolean") {
            logWarning(`Missing or invalid "isValid" field at index ${index}. Defaulting to "false".`);
            address.isValid = false; // Assign a default value
        }

        const input = [
            ...encodeFeature(address.overture.freeform || "", vocab),
            normalize(
                parseInt(address.overture.postcode?.replace("-", ""), 10) || 0,
                minPostcode,
                maxPostcode
            ),
            ...encodeFeature(address.overture.locality || "", vocab),
            ...encodeFeature(address.overture.state || "", vocab),
            ...encodeFeature(address.overture.region || "", vocab),
            ...encodeFeature(address.overture.country || "", vocab),
        ];

        return {
            input,
            output: [address.isValid ? 1 : 0],
        };
    }).filter((entry) => {
        const valid = entry.input.length > 0 && Array.isArray(entry.output) && entry.output.length > 0;
        if (!valid) {
            logWarning(`Invalid training data entry: ${JSON.stringify(entry)}`);
        }
        return valid;
    });
}

if (vocab.length === 0) {
    console.error("Vocabulary is empty! Ensure sampleData has valid address fields.");
    process.exit(1);
}

const trainingData = prepareTrainingData(addresses);
console.log("Prepared Training Data (Sample):", trainingData.slice(0, 3));

// Initialize and train the model
const net = new brain.NeuralNetwork();

function saveModel(model, filePath) {
    const modelJSON = model.toJSON();
    fs.writeFileSync(filePath, JSON.stringify(modelJSON));
    console.log(`Model saved to ${filePath}`);
}

function trainModel(trainingData) {
    if (!Array.isArray(trainingData) || trainingData.length === 0) {
        console.error("Training data is invalid or empty.");
        process.exit(1);
    }

    console.log("Training started...");

    const startTime = Date.now();
    try {
        net.train(trainingData, {
            iterations: 10000,
            errorThresh: 0.005,
        });
        const endTime = Date.now();
        const trainingDuration = (endTime - startTime) / 1000;
        console.log("Training completed.");
        console.log(`Training duration: ${trainingDuration.toFixed(2)} seconds.`);
        saveModel(net, "models/validatedAddress.json");
    } catch (error) {
        console.error("An error occurred during training:", error.message);
    }
}

// Train the model
trainModel(trainingData);
