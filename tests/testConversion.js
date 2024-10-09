const { convertSingleFeature, convertBatchFeatures } = require('../o2o-cli');

// Single feature
const geoJsonFeature = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-123.3656, 48.4284]
    },
    "properties": {
        "id": 123,
        "name": "Sample Place"
    }
};

const osmFeature = convertSingleFeature(geoJsonFeature);
console.log("OSM Feature:", osmFeature);

// Batch
const geoJsonFeatures = [
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-123.3656, 48.4284]
        },
        "properties": {
            "id": 123,
            "name": "Sample Place 1"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-123.3657, 48.4285]
        },
        "properties": {
            "id": 124,
            "name": "Sample Place 2"
        }
    }
];

const osmFeatures = convertBatchFeatures(geoJsonFeatures);
console.log("OSM Features:", osmFeatures);
