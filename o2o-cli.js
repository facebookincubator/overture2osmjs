#!/usr/bin/env node
import * as fs from 'node:fs/promises';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

if (argv.help) {
  console.log(`
    GeoJSON to OSM Data Converter

    usage: o2o-cli <file.geojson> [file2.geojson] [file3.geojson]...

    o2o-cli <file.geojson>    Convert GeoJSON data to OSM format.
  `);
}

const filenames = argv._;

if (filenames.length === 0) {
  console.log("o2o-cli: Please provide at least one file name.");
} else {
  processFilesWithBatching(filenames)
    .then(() => console.log("Batch processing completed successfully."))
    .catch((error) => console.error("Error during batch processing:", error.message));
}

/**
 * Process files using batch conversion for efficiency.
 * 
 * @param {Array<string>} filenames
 */
async function processFilesWithBatching(filenames) {
  try {
    await Promise.all(filenames.map(async (filename) => {
      console.log(`Processing file: ${filename}`);
      const data = JSON.parse(await fs.readFile(filename, { encoding: 'utf-8' }));

      const osmData = convertBatchFeatures(data.features);
      console.log(osmData);  
    }));
  } catch (error) {
    console.error("Error during file processing:", error.message);
  }
}

/**
 * Converts a single GeoJSON feature to OSM format.
 * 
 * @param {object} feature - GeoJSON feature to convert.
 * @returns {object} - Converted OSM feature.
 */
function convertSingleFeature(feature) {
  return {
    id: feature.id || generateOSMId(),
    type: feature.geometry.type,
    properties: feature.properties
  };
}

/**
 * Batch converts multiple GeoJSON features to OSM format.
 * 
 * @param {Array<object>} features 
 * @returns {Array<object>} 
 */
function convertBatchFeatures(features) {
  return features.map(feature => convertSingleFeature(feature));
}

/**
 * Generates a unique OSM ID for the feature (dummy function).
 * 
 * @returns {number} - Generated OSM ID.
 */
function generateOSMId() {
  return Math.floor(Math.random() * 1e6);  
}
