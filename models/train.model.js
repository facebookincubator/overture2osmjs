import * as tf from '@tensorflow/tfjs-node';
import sampleData from '../sampleData/addresses.json' assert { type: 'json' }; // Load preprocessed data


const vocab = [
    'Rua Espanha',
    'Sobral',
    'Ceará',
    'Brasil',
    'APRAZIVEL',
    'Rua das Flores',
    'Fortaleza',
    'Avenida Brasil',
    'Rio de Janeiro',
    'Centro',
];

/**
 * Function to encode features for model input.
 */
function encodeFeature(feature, vocab) {
    const encoded = Array(vocab.length).fill(0);
    const index = vocab.indexOf(feature);
    if (index !== -1) encoded[index] = 1;
    return encoded;
}

/**
 * Prepares the sample data for training.
 * Converts each address into a feature vector.
 */
function prepareTrainingData(data) {
    return data.map(address => [
        ...encodeFeature(address.street_name || '', vocab),
        parseInt(address.postcode?.replace('-', ''), 10) || 0,
        ...encodeFeature(address.city || '', vocab),
        ...encodeFeature(address.state || '', vocab),
        ...encodeFeature(address.country || '', vocab),
        ...encodeFeature(address.freeform || '', vocab),
    ]);
}

// Convert `sampleData` to training format
const trainingData = prepareTrainingData(sampleData);
console.log('Prepared Training Data:', trainingData.slice(0, 3)); // Display a few rows for debugging

/**
 * Train a TensorFlow.js model using the training data.
 */
async function trainModel() {
    const model = tf.sequential();

    // Add layers to the model
    model.add(tf.layers.dense({ inputShape: [trainingData[0].length], units: 64, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

    // Compile the model
    model.compile({
        optimizer: tf.train.adam(),
        loss: 'binaryCrossentropy',
        metrics: ['accuracy'],
    });

    // Convert data to tensors
    const inputs = tf.tensor2d(trainingData); // Feature data
    const labels = tf.tensor1d(sampleData.map(address => (address.isValid ? 1 : 0))); // Target labels

    // Train the model
    await model.fit(inputs, labels, {
        epochs: 10,
        batchSize: 32,
        callbacks: {
            onEpochEnd: (epoch, logs) => console.log(`Epoch ${epoch + 1}: Loss = ${logs.loss}, Accuracy = ${logs.acc}`),
        },
    });

    // Save the trained model
    await model.save('file://./models/validateAddress');
    console.log('Model trained and saved successfully!');
}

// Run training
trainModel().catch(error => console.error('Error during model training:', error));
