/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from "fs";
import brain from "brain.js";
import testData from "../sampleData/testData.json" assert { type: "json" };

console.log("Test Data:", testData);

const vocab = [];
if (testData && testData.length > 0) {
    testData.forEach(address => {
        const fields = [
            address.overture.freeform,
            address.overture.locality,
            address.overture.postcode,
            address.overture.region,
            address.overture.country
        ];

        fields.forEach(field => {
            if (field && typeof field === "string" && field.trim() !== "") {
                if (!vocab.includes(field)) {
                    vocab.push(field);
                }
            }
        });
    });
}

console.log("Vocabulary:", vocab);
fs.writeFileSync("models/vocab.json", JSON.stringify(vocab));

// Encode features
function encodeFeature(feature, vocab) {
    const encoded = Array(vocab.length).fill(0);
    const index = vocab.indexOf(feature);
    if (index !== -1) encoded[index] = 1;
    return encoded;
}

// Normalize values
function normalize(value, min, max) {
    if (max === min) return 0; // Avoid division by zero
    return (value - min) / (max - min);
}

// Prepare training data
function prepareTrainingData(data) {
    const minPostcode = Math.min(...data.map(addr => parseInt(addr.overture.postcode?.replace("-", "") || 0, 10)));
    const maxPostcode = Math.max(...data.map(addr => parseInt(addr.overture.postcode?.replace("-", "") || 0, 10)));

    return data.map((address, index) => {
        const input = [
            ...encodeFeature(address.overture.freeform || "", vocab),
            normalize(parseInt(address.overture.postcode?.replace("-", ""), 10) || 0, minPostcode, maxPostcode),
            ...encodeFeature(address.overture.locality || "", vocab),
            ...encodeFeature(address.overture.region || "", vocab),
            ...encodeFeature(address.overture.country || "", vocab),
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

if (vocab.length === 0) {
    console.error("Vocabulary is empty! Ensure sampleData has valid address fields.");
    process.exit(1);
}

const trainingData = prepareTrainingData(testData);
console.log("Prepared Training Data:", trainingData.slice(0, 3));

const net = new brain.NeuralNetwork();

function saveModel(model, filePath) {
    const modelJSON = model.toJSON();
    fs.writeFileSync(filePath, JSON.stringify(modelJSON));
    console.log(`Model saved to ${filePath}`);
}

// Train the model with Overture-OSM pairs
function trainModel(trainingData) {
    if (!Array.isArray(trainingData)) {
        console.error("Invalid training data: ", trainingData);
        return;
    }

    console.log("Training started...");

    const startTime = Date.now();  
    net.train(trainingData, { iterations: 10000 });
    const endTime = Date.now();  
    const trainingDuration = (endTime - startTime) / 1000;  
    console.log("Training completed.");
    console.log(`Training duration: ${trainingDuration.toFixed(2)} seconds.`);
    saveModel(net, "models/validatedAddress.json");
    console.log("Model trained and saved successfully.");
}

trainModel(trainingData);
