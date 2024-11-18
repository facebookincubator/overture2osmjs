import tf from '@tensorflow/tfjs-node';



async function validateData(input) {
    const model = await tf.loadLayersModel('file://./MLModel/model.json');
    const inputTensor = tf.tensor2d([input]); // Input: [latitude, longitude]
    const prediction = model.predict(inputTensor);
    const output = prediction.dataSync()[0];

    if (output > 0.5) {
        console.log('Valid data (confidence:', output.toFixed(2) + ')');
    } else {
        console.log('Invalid data (confidence:', output.toFixed(2) + ')');
    }
}

// Test with new data
validateData([40.7128, -74.0060]); // Expected: Valid
validateData([400.0, 300.0]);      // Expected: Invalid
