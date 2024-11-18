import tf from '@tensorflow/tfjs-node';



async function createAndTrainModel() {
    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [2], units: 4, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
    model.compile({
        optimizer: tf.train.adam(),
        loss: 'binaryCrossentropy',
        metrics: ['accuracy'],
    });

    const xs = tf.tensor2d([
        [40.7128, -74.0060], // Valid (example: NYC coordinates)
        [90.0, 180.0],       // Valid (edge of the globe)
        [400.0, 300.0],      // Invalid
        [-200.0, -100.0],    // Invalid
    ]);
    const ys = tf.tensor2d([[1], [1], [0], [0]]); // Labels: 1 = valid, 0 = invalid

    // Train the model
    await model.fit(xs, ys, {
        epochs: 50,
        batchSize: 2,
        verbose: 1,
    });

    // Save the model locally
    await model.save('file://./ml-model');

    console.log('Model trained and saved!');
}

createAndTrainModel();
