import * as tf from '@tensorflow/tfjs';

function encodeFeature(feature, vocab) {
    const encoded = Array(vocab.length).fill(0);
    const index = vocab.indexOf(feature);
    if (index !== -1) encoded[index] = 1;
    return encoded;
}

let model;

async function loadModel() {
    try {
        model = await tf.loadLayersModel('file://./models/validateAddress.json');

        console.log('Model loaded successfully.');
    } catch (error) {
        console.error('Error loading model:', error);
    }
}

function preprocessInput(address) {
    const vocab = ['Rua Espanha', 'Sobral', 'Ceará', 'Brasil', 'APRAZIVEL'];
    return [
        ...encodeFeature(address.street_name || '', vocab),
        parseInt(address.postcode.replace('-', ''), 10) || 0,
        ...encodeFeature(address.city || '', vocab),
        ...encodeFeature(address.state || '', vocab),
        ...encodeFeature(address.country || '', vocab),
        ...encodeFeature(address.freeform || '', vocab),
    ];
}

// Validate converted address
export async function validateConvertedAddress(convertedAddress) {
    if (!model) {
        console.error('Model is not loaded. Call loadModel() before validation.');
        return;
    }

    const processedInput = preprocessInput(convertedAddress);
    const tensorInput = tf.tensor([processedInput]); // Wrap input in an array for batch processing
    const prediction = (await model.predict(tensorInput).data())[0]; // Extract prediction value

    if (prediction > 0.5) {
        console.log('The address is valid.');
    } else {
        console.log('The address is invalid. Suggesting corrections...');
        const corrections = suggestCorrections(convertedAddress);
        promptUserForCorrections(corrections);
    }
}

// Suggest corrections
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

// Validate postcode 
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

// Example address to validate
const convertedAddress = {
    street_name: "Rua Espanha",
    postcode: "62050-255",
    city: "Sobral",
    state: "Ceará",
    country: "Brasil",
    freeform: "APRAZIVEL"
};

// Load the model and validate
loadModel().then(() => {
    validateConvertedAddress(convertedAddress);
});
