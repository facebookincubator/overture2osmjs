import * as brain from 'brain.js';
import { getAddressFromOverture, suggestCorrections } from './validateAddress.js';  
import fs from 'fs';
import readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let net = new brain.NeuralNetwork({
    hiddenLayers: [10, 6],
    activation: 'relu',
});
let model;
let vocab = [];

// Load vocabulary and model files
function loadVocabulary() {
    return new Promise((resolve, reject) => {
        try {
            const vocabData = fs.readFileSync('models/vocab.json', 'utf8');
            vocab = JSON.parse(vocabData);
            console.log('Vocabulary loaded successfully.');
            resolve();
        } catch (error) {
            console.error('Error loading vocabulary:', error);
            reject(error);
        }
    });
}

// Load the model and training data
export function loadModel() {
    return new Promise((resolve, reject) => {
        loadVocabulary()
            .then(() => {
                try {
                    const modelJSON = fs.readFileSync('models/validatedAddress.json', 'utf8');
                    model = JSON.parse(modelJSON);
                    net.fromJSON(model);
                    console.log('Model loaded successfully.');
                    resolve();
                } catch (error) {
                    console.error('Error loading model:', error);
                    reject(error);
                }
            })
            .catch(reject);
    });
}

// Preprocess input (normalize postcode and extract features)
async function preprocessInput(address) {
    console.log('Processing address:', address);

    // Validate the address using the OpenStreetMap API
    const addressData = await getAddressFromOverture(address);
    
    if (!addressData || addressData.length === 0) {
        console.log('Address not found in Overture. Suggesting corrections...');
        const corrections = suggestCorrections(address);
        corrections.forEach(suggestion => {
            console.log(suggestion);
        });
    } else {
        console.log('Address is valid:', addressData);
    }

    // Prepare the features for neural network processing
    const features = prepareFeatures(address);
    console.log('Processed features:', features.length);

    return features;
}

// Prepare features for neural network (encode address)
function prepareFeatures(address) {
    const features = [
        address.street_name ? address.street_name.length : 0,  // Street name length
        address.postcode ? address.postcode.replace('-', '') : 0, // Postcode length
        address.city ? address.city.length : 0,  // City length
        address.state ? address.state.length : 0,  // State length
        address.country ? address.country.length : 0,  // Country length
    ];
    
    while (features.length < 637) {
        features.push(0);  // Padding to match expected input size
    }

    return features;
}

// Train the model with Overture-OSM pairs
function trainModel(trainingData) {
    trainingData.forEach(pair => {
        const input = prepareFeatures(pair.overtureAddress);
        const output = prepareFeatures(pair.osmAddress);  // Use OSM address as output
        net.train([{ input, output }], { iterations: 10000 });
    });

    // Save the model after training
    model = net.toJSON();
    fs.writeFileSync('models/validatedAddress.json', JSON.stringify(model));
    console.log('Model trained and saved successfully.');
}

// Validate and suggest corrections
export async function validateConvertedAddress(address) {
    const features = await preprocessInput(address);
    const output = net.run(features);
    console.log('Model output:', output);
    // Check if the output length is correct (should be 637 for a valid address prediction)
    if (output.length !== 637) {
        console.error('Output has invalid length:', output.length);
        return;
    }

    const predictedAddress = outputToAddress(output);

    if (isPredictionConfident(predictedAddress)) {
        console.log('Predicted address:', predictedAddress);
    } else {
        console.log('Prediction is not confident. Asking user for correction...');
        const userCorrection = await getUserCorrection(predictedAddress);
        // Retrain model with the user-suggested correction
        trainModel([{ overtureAddress: address, osmAddress: userCorrection }]);
    }
}


// Convert neural network output to address structure (reverse of feature extraction)
function outputToAddress(output) {
    return {
        street_name: output[0] > 0 ? 'Street ' + output[0] : '',
        postcode: output[1] > 0 ? 'Postcode ' + output[1] : '',
        city: output[2] > 0 ? 'City ' + output[2] : '',
        state: output[3] > 0 ? 'State ' + output[3] : '',
        country: output[4] > 0 ? 'Country ' + output[4] : '',
        // Include other fields here based on your output array length
    };
}


// Check if the model's prediction is confident enough (threshold-based)
function isPredictionConfident(predictedAddress) {
    return predictedAddress.city && predictedAddress.street_name; 
}

// Prompt the user for corrections
async function getUserCorrection(predictedAddress) {
    console.log('Please provide a suggestion for the correct address.');
    console.log('Predicted Address:', predictedAddress);
    const userInput = await getUserInput(predictedAddress);
    return userInput;
}

function getUserInput(promptMessage) {
    return new Promise((resolve) => {
        rl.question(promptMessage, (userInput) => {
            resolve(userInput);
            rl.close();
        });
    });
}


export { trainModel };

