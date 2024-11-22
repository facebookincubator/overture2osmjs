import * as tf from '@tensorflow/tfjs';

const data = preprocessData(sampleData/addresses.json); 

const features = data.map(item => [
    item.street_name,
    item.postcode,
    item.city,
    item.state,
    item.country,
    item.freeform
]);

const labels = data.map(item => item.valid_postcode);  // 0 for invalid, 1 for valid

const featureTensor = tf.tensor(features);
const labelTensor = tf.tensor(labels);

const model = tf.sequential();
model.add(tf.layers.dense({ units: 64, inputShape: [features[0].length], activation: 'relu' }));
model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));  // valid/invalid postcode

model.compile({
    optimizer: 'adam',
    loss: 'binaryCrossentropy',
    metrics: ['accuracy'],
});

async function trainModel() {
    await model.fit(featureTensor, labelTensor, {
        epochs: 50,
        batchSize: 32,
    });
    await model.save('localstorage://address-validation-model'); 
}

trainModel().then(() => {
    console.log('Model trained and saved!');
});
