import * as tf from '@tensorflow/tfjs';



async function validateConvertedAddress(convertedAddress) {
    const model = await tf.loadLayersModel('localstorage://address-validation-model');
    const processedInput = preprocessInput(convertedAddress);  
    // Prediction - probability between 0 and 1
    const prediction = await model.predict(tf.tensor([processedInput]));  // Input must be an array
    const output = prediction.dataSync()[0];  // Prediction result

    // Address validation based on the prediction
    if (output > 0.5) {
        console.log('The address is valid.');
    } else {
        console.log('The address is invalid. Suggesting corrections...');
        suggestCorrections(convertedAddress);  // Suggest corrections for invalid addresses
    }
}

const convertedAddress = {
    street_name: "Rua Espanha",
    postcode: "62050-255",
    city: "Sobral",
    state: "Ceará",
    country: "Brasil",
    freeform: "APRAZIVEL"
};
validateConvertedAddress(convertedAddress);
