#!/usr/bin/env node
import * as fs from 'node:fs/promises';
import minimist from 'minimist';
import pLimit from "p-limit";
import { isGeoJSON } from 'geojson-validation';

const limit = pLimit(5);

const argv = minimist(process.argv.slice(2));

// Help message
if (argv.help) {
  console.log(`
    GeoJSON to OSM Data Converter

    usage: o2o-cli <file.geojson> [file2.geojson] [file3.geojson]... [--output <console|file|both>]

    Options:
      --output <console|file|both>   Specify output method (default: both)
  `);
}

const filenames = argv._;
const outputOption = argv.output || 'both'; // Default output is 'both'

if (filenames.length === 0) {
  console.log("o2o-cli: Please provide at least one file name.");
} else {
  processFilesWithBatching(filenames)
    .then(() => console.log("Batch processing completed successfully."))
    .catch((error) => console.error("Error during batch processing:", error.message));
}

async function processFilesWithBatching(filenames) {
  try {
    await Promise.all(filenames.map(filename => 
      limit(async () => {
        console.log(`Processing file: ${filename}`);
        const data = JSON.parse(await fs.readFile(filename, { encoding: 'utf-8' }));

        // Validate GeoJSON format
        if (!isGeoJSON(data)) {
          throw new Error(`Invalid GeoJSON format in file: ${filename}`);
        }

        const osmData = convertBatchFeatures(data.features);
        
        // Output based on user preference
        if (outputOption === 'console' || outputOption === 'both') {
          console.log(osmData);
        }
        if (outputOption === 'file' || outputOption === 'both') {
          await saveToFile(filename, osmData);
        }
      })
    ));
  } catch (error) {
    console.error("Error during file processing:", error.message);
  }
}

function convertSingleFeature(feature) {
  return {
    id: feature.id || generateOSMId(),
    type: feature.geometry.type,
    properties: feature.properties
  };
}

function convertBatchFeatures(features) {
  return features.map(feature => convertSingleFeature(feature));
}

function generateOSMId() {
  return Math.floor(Math.random() * 1e6);  
}

async function saveToFile(filename, osmData) {
  const outputFilename = filename.replace('.geojson', '.osm.json');
  await fs.writeFile(outputFilename, JSON.stringify(osmData, null, 2), 'utf-8');
  console.log(`Converted data saved to: ${outputFilename}`);
}
