const overtureBindings = require('bindings')('overture');

// Single GeoJSON feature conversion
function convertSingleFeature(feature) {
    try {
        const result = overtureBindings.convertSingleFeature(feature);
        return JSON.parse(result);
    } catch (err) {
        console.error("Error converting single feature:", err);
    }
}

// Batch conversion 
function convertBatchFeatures(features) {
    try {
        const result = overtureBindings.convertBatchFeatures(features);
        return result.map(r => JSON.parse(r));
    } catch (err) {
        console.error("Error converting batch features:", err);
    }
}

module.exports = {
    convertSingleFeature,
    convertBatchFeatures
};
