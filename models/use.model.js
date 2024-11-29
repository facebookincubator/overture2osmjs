import * as brain from 'brain.js';
import { encodeFeature } from '../utils/encodeFeature';
import fs from 'fs';

let net = new brain.NeuralNetwork({
    hiddenLayers: [10, 6],
    activation: 'relu',
});
let model;
let vocab = [];

function loadVocabulary() {
    return new Promise((resolve, reject) => {
        try {
            const vocabData = fs.readFileSync('vocab.json', 'utf8');
            vocab = JSON.parse(vocabData);
            console.log('Vocabulary loaded successfully.');
            resolve();
        } catch (error) {
            console.error('Error loading vocabulary:', error);
            reject(error);
        }
    });
}

// Load the model and vocabulary
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

// Preprocess the input (normalize postcode and use loaded vocab)
function preprocessInput(address) {
    const minPostcode = Math.min(...vocab.map(addr => parseInt(addr.postcode.replace('-', ''), 10)));
    const maxPostcode = Math.max(...vocab.map(addr => parseInt(addr.postcode.replace('-', ''), 10)));

    return [
        ...encodeFeature(address.street_name || '', vocab),
        normalize(parseInt(address.postcode.replace('-', ''), 10), minPostcode, maxPostcode),
        ...encodeFeature(address.city || '', vocab),
        ...encodeFeature(address.state || '', vocab),
        ...encodeFeature(address.country || '', vocab),
        ...encodeFeature(address.freeform || '', vocab),
    ];
}

// Normalize function for postcode
function normalize(value, min, max) {
    if (max === min) return 0; // Avoid division by zero
    return (value - min) / (max - min);
}

// Validate converted address
export function validateConvertedAddress(convertedAddress) {
    if (!net) {
        console.error('Model is not loaded. Call loadModel() before validation.');
        return;
    }

    const processedInput = preprocessInput(convertedAddress);
    const prediction = net.run(processedInput);  // Use the model to predict

    if (prediction > 0.5) {
        console.log('The address is valid.');
    } else {
        console.log('The address is invalid. Suggesting corrections...');
        const corrections = suggestCorrections(convertedAddress);
        promptUserForCorrections(corrections);
    }
}

// Suggest corrections based on known issues
export function suggestCorrections(address) {
    let suggestions = [];
    if (!isValidPostcode(address.postcode)) {
        suggestions.push('Suggested postcode: 62050-255');
    }

    if (!address.street_name) {
        suggestions.push('Suggested street name: Rua Espanha');
    }

    return suggestions;
}

// Validate postcode format
function isValidPostcode(postcode) {
    return /^[0-9]{5}-[0-9]{3}$/.test(postcode);
}

// Prompt user for corrections
function promptUserForCorrections(corrections) {
    console.log('Please review and confirm the following suggested corrections:');
    corrections.forEach(suggestion => {
        console.log(suggestion);
    });
}
