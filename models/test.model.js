import fs from "fs";
import brain from "brain.js";
import readline from "readline";

// Load model
function loadModel(filePath) {
    const modelData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const net = new brain.NeuralNetwork();
    net.fromJSON(modelData);
    return net;
}

// Encode input
function encodeInput(address, vocab) {
    function encodeFeature(feature, vocab) {
        const encoded = Array(vocab.length).fill(0);
        const index = vocab.indexOf(feature);
        if (index !== -1) encoded[index] = 1;
        return encoded;
    }

    const input = [
        ...encodeFeature(address.freeform || "", vocab),
        ...encodeFeature(address.locality || "", vocab),
        ...encodeFeature(address.region || "", vocab),
        ...encodeFeature(address.country || "", vocab),
    ];
    return input;
}

// Check if all required fields are present
function validateAddress(address) {
    const requiredFields = ['freeform', 'locality', 'region', 'country'];
    const missingFields = requiredFields.filter(field => !address[field]);
    return missingFields;
}

// Dynamic Suggestions based on user input
async function suggestField(field, input) {
    // Example: Suggesting region and country based on locality (you can replace this with a real API or dataset)
    if (field === "region" && input.locality) {
        if (input.locality.toLowerCase().includes("springfield")) {
            return ["Illinois", "Missouri", "Ohio"];
        }
        return ["California", "Texas", "New York"]; // Default suggestions
    }

    if (field === "country" && input.locality) {
        return ["USA", "Canada", "UK"];
    }

    return []; // Return empty array for other cases
}

// Test the model
export function testModel(address) {
    const vocab = JSON.parse(fs.readFileSync("models/vocab.json", "utf8"));
    const net = loadModel("models/validatedAddress.json");

    const input = encodeInput(address, vocab);
    const result = net.run(input);
    console.log(`Prediction for the input: ${JSON.stringify(result)}`);
    return result;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Prompt user for address input
async function promptUserForAddress() {
    rl.question('Please enter an address in JSON format: ', async (input) => {
        try {
            let address = JSON.parse(input);
            const missingFields = validateAddress(address);
            
            if (missingFields.length > 0) {
                console.log("The following fields are missing:");
                for (const field of missingFields) {
                    console.log(`- ${field}`);
                    
                    rl.question(`Please enter a value for ${field}: `, async (answer) => {
                        address[field] = answer;

                        // Get dynamic suggestions if available
                        const suggestions = await suggestField(field, address);
                        if (suggestions.length > 0) {
                            console.log(`Suggested values for ${field}: ${suggestions.join(', ')}`);
                        }

                        if (validateAddress(address).length === 0) {
                            const result = testModel(address);
                            console.log('Model prediction result:', result);
                            rl.close();
                        }
                    });
                }
            } else {
                const result = testModel(address);
                console.log('Model prediction result:', result);
                rl.close();
            }
        } catch (error) {
            console.error('Invalid address format:', error);
            rl.close();
        }
    });
}

// Start the user prompt
promptUserForAddress();

