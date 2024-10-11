import bindings from 'bindings';
const overtureBindings = bindings('overtureToOsmData');

// Single GeoJSON feature conversion
export function convertSingleFeature(feature) {
    try {
        const result = overtureBindings.convertSingleFeature(feature);
        return JSON.parse(result);
    } catch (err) {
        console.error("Error converting single feature:", err);
    }
}

// Batch conversion of multiple GeoJSON features
export function convertBatchFeatures(features) {
    try {
        const result = overtureBindings.convertBatchFeatures(features); 
        return JSON.parse(result);
    } catch (err) {
        console.error("Error converting batch features:", err);
    }
}
