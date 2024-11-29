import fs from 'fs';
import brain from 'brain.js';
import sampleData from '../sampleData/addresses.json' assert { type: 'json' };

console.log('Sample Data:', sampleData);

const vocab = [];
if (sampleData && sampleData.length > 0) {
    sampleData.forEach(address => {
        const fields = [
            address.overture.freeform,
            address.overture.locality,
            address.overture.postcode,
            address.overture.region,
            address.overture.country
        ];

        fields.forEach(field => {
            if (field && typeof field === 'string' && field.trim() !== '') {
                if (!vocab.includes(field)) {
                    vocab.push(field);
                }
            }
        });
    });
}

// Log vocab to ensure it is populated correctly
console.log('Vocabulary:', vocab);

// Save vocab to a file to inspect later
fs.writeFileSync('models/vocab.json', JSON.stringify(vocab));

// Function to encode features
function encodeFeature(feature, vocab) {
    const encoded = Array(vocab.length).fill(0);
    const index = vocab.indexOf(feature);
    if (index !== -1) encoded[index] = 1;
    return encoded;
}

// Function to normalize values
function normalize(value, min, max) {
    if (max === min) return 0; // Avoid division by zero
    return (value - min) / (max - min);
}

// Prepare training data
function prepareTrainingData(data) {
    const minPostcode = Math.min(...data.map(addr => parseInt(addr.overture.postcode?.replace('-', '') || 0, 10)));
    const maxPostcode = Math.max(...data.map(addr => parseInt(addr.overture.postcode?.replace('-', '') || 0, 10)));

    return data.map((address, index) => {
        const input = [
            ...encodeFeature(address.overture.freeform || '', vocab),
            normalize(parseInt(address.overture.postcode?.replace('-', ''), 10) || 0, minPostcode, maxPostcode),
            ...encodeFeature(address.overture.locality || '', vocab),
            ...encodeFeature(address.overture.region || '', vocab),
            ...encodeFeature(address.overture.country || '', vocab),
        ];

        if (input.some(isNaN)) {
            console.error(`Invalid input at index ${index}:`, { address, input });
        }

        return {
            input,
            output: [address.isValid ? 1 : 0],
        };
    });
}

// Prepare the training data
if (vocab.length === 0) {
    console.error('Vocabulary is empty! Ensure sampleData has valid address fields.');
    process.exit(1);
}

const trainingData = prepareTrainingData(sampleData);
console.log('Prepared Training Data:', trainingData.slice(0, 3));

// Initialize the neural network
const net = new brain.NeuralNetwork();

// Function to save model
function saveModel(model, filePath) {
    const modelJSON = model.toJSON();
    fs.writeFileSync(filePath, JSON.stringify(modelJSON));
    console.log(`Model saved to ${filePath}`);
}

// Function to train the model
function trainModel() {
    console.log('Training started...');
    const startTime = Date.now();
    net.train(trainingData, {
        iterations: 2000,
        log: true,
        logPeriod: 100,
        learningRate: 0.01,
    });
    const endTime = Date.now();
    console.log('Training completed!');
    console.log(`Training took ${((endTime - startTime) / 1000).toFixed(2)} seconds.`);
    saveModel(net, './models/validatedAddress.json');
}

// Train the model
trainModel();
