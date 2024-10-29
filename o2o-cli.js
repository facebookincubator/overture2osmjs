#!/usr/bin/env node
import * as fs from 'node:fs/promises';
import minimist from 'minimist';
import pLimit from 'p-limit';
import { validateGeoJSON } from './validate.js';
import readline from 'readline';

const limit = pLimit(5);
const argv = minimist(process.argv.slice(2));

const filenames = argv._;
const outputOption = argv.output || 'both'; // Default output is 'both'
const MAX_FILE_SIZE_MB = 100; // Max file size in MB
const MAX_FILES = 5; // Max files to process in batch

// Display help message if no filenames or `--help` flag is provided
if (filenames.length === 0 || argv.help) {
  console.log(`
    GeoJSON to OSM Data Converter

    usage: o2o-cli <file.geojson> [file2.geojson] [file3.geojson]... [--output <console|file|both|xml>] 

    Options:
      --output <console|file|both|xml>   Specify output method (default: both, xml for OSM XML output)
  `);
  process.exit(0); // Exit if no files are provided
}

// Process each file in batches
processFilesWithBatching(filenames)
  .then(() => console.log('Batch processing completed successfully.'))
  .catch((error) => console.error('Error during batch processing:', error.message));

/**
 * Processes multiple files with batching and limited concurrency.
 * @param {Array} filenames - List of file paths to process.
 */
 async function processFilesWithBatching(filenames) {
  const validFiles = [];

  for (const filename of filenames) {
    if (!filename.endsWith('.geojson')) {
      console.error(`Skipping non-GeoJSON file: ${filename}`);
      continue;
    }

    const stats = await fs.stat(filename);
    const fileSizeInMB = stats.size / (1024 * 1024); // Convert bytes to MB
    
    if (fileSizeInMB > MAX_FILE_SIZE_MB) {
      console.error(`File ${filename} exceeds the maximum size of ${MAX_FILE_SIZE_MB} MB.`);
      await processLargeFile(filename);
    } else {
      validFiles.push(filename);
    }
  }

  const filesToProcess = validFiles.slice(0, MAX_FILES);

  try {
    await Promise.all(
      filesToProcess.map((filename) =>
        limit(async () => {
          console.log(`Processing file: ${filename}`);
          try {
            const data = JSON.parse(await fs.readFile(filename, { encoding: 'utf-8' }));
            validateGeoJSON(data);

            const osmData = convertBatchFeatures(data.features);
            const osmXmlData = geojsonToOsmXml(data.features);

            // Output based on user preference
            if (outputOption === 'console' || outputOption === 'both') {
              console.log(osmData);
            }

            if (outputOption === 'xml') {
              console.log(osmXmlData);
            }

            if (outputOption === 'file' || outputOption === 'both') {
              await saveToFile(filename, osmData);
            }

            if (outputOption === 'xml' || outputOption === 'both') {
              await saveToXmlFile(filename, osmXmlData);
            }
          } catch (error) {
            console.error(`Error processing file ${filename}:`, error.message);
          }
        })
      )
    );
  } catch (error) {
    console.error('Error during batch processing:', error.message);
  }
}


/**
 * Processes a large file in chunks of 100 MB and prompts the user to continue.
 * @param {string} filename - The filename of the large GeoJSON file.
 */
async function processLargeFile(filename) {
  const stats = await fs.stat(filename);
  const totalSize = stats.size;
  let offset = 0;

  while (offset < totalSize) {
    const chunkSize = Math.min(100 * 1024 * 1024, totalSize - offset); // 100 MB or remaining size
    const fileHandle = await fs.open(filename, 'r');
    const buffer = Buffer.alloc(chunkSize);
    
    await fileHandle.read(buffer, 0, chunkSize, offset);
    await fileHandle.close();

    const chunkData = JSON.parse(buffer.toString());
    validateGeoJSON(chunkData);
    const osmData = convertBatchFeatures(chunkData.features);
    const osmXmlData = geojsonToOsmXml(chunkData.features);

    // Output based on user preference
    if (outputOption === 'console' || outputOption === 'both') {
      console.log(osmData);
    }

    if (outputOption === 'xml') {
      console.log(osmXmlData);
    }

    if (outputOption === 'file' || outputOption === 'both') {
      await saveToFile(filename, osmData);
    }

    if (outputOption === 'xml' || outputOption === 'both') {
      await saveToXmlFile(filename, osmXmlData);
    }

    offset += chunkSize; 

    if (offset < totalSize) {
      const continueProcessing = await promptUserForContinue();
      if (!continueProcessing) {
        console.log('User opted to stop processing further chunks.');
        break;
      }
    }
  }
}

/**
 * Prompts the user to continue processing the next chunk.
 * @returns {Promise<boolean>} - Resolves to true if the user wants to continue, otherwise false.
 */
async function promptUserForContinue() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Continue processing the next chunk? (y/n): ', (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'y');
    });
  });
}

/**
 * Converts an array of GeoJSON features to OSM JSON format.
 * @param {Array} features - Array of GeoJSON features.
 * @returns {Array} - Array of converted OSM data.
 */
function convertBatchFeatures(features) {
  return features.map((feature) => convertSingleFeature(feature));
}

/**
 * Single GeoJSON feature conversion to OSM JSON format.
 * @param {object} feature - GeoJSON feature object.
 * @returns {object} - Converted OSM feature object.
 */
function convertSingleFeature(feature) {
  return {
    id: feature.id || generateOSMId(),
    type: feature.geometry.type,
    properties: feature.properties,
  };
}

/**
 * Converts an array of GeoJSON features to OSM XML format.
 * @param {Array} features - Array of GeoJSON features.
 * @returns {string} - Converted OSM XML data as a string.
 */
function geojsonToOsmXml(features) {
  let osmXmlData = `<?xml version="1.0" encoding="UTF-8"?>\n<osm version="0.6" generator="GeoJSONToOSM">\n`;

  features.forEach((feature) => {
    const geometry = feature.geometry;
    const properties = feature.properties || {};

    if (geometry.type === 'Point') {
      osmXmlData += `  <node id="${properties.id || generateOSMId()}" lat="${geometry.coordinates[1]}" lon="${geometry.coordinates[0]}">\n`;
      for (const [key, value] of Object.entries(properties)) {
        osmXmlData += `    <tag k="${key}" v="${value}"/>\n`;
      }
      osmXmlData += '  </node>\n';
    } else if (geometry.type === 'Polygon') {
      osmXmlData += `  <way id="${properties.id || generateOSMId()}">\n`;
      geometry.coordinates[0].forEach(([lon, lat]) => {
        osmXmlData += `    <nd ref="${lat},${lon}"/>\n`;
      });
      for (const [key, value] of Object.entries(properties)) {
        osmXmlData += `    <tag k="${key}" v="${value}"/>\n`;
      }
      osmXmlData += '  </way>\n';
    }
  });

  osmXmlData += '</osm>';
  return osmXmlData;
}

/**
 * Generates a random OSM ID if the feature does not have an ID.
 * @returns {number} - Randomly generated OSM ID.
 */
function generateOSMId() {
  return Math.floor(Math.random() * 1e6);
}

/**
 * Saves converted OSM data to a file in JSON format.
 * @param {string} filename - Original filename to derive the output filename.
 * @param {Array} osmData - Converted OSM data to save.
 */
async function saveToFile(filename, osmData) {
  const outputFilename = filename.replace('.geojson', '.osm.json');
  await fs.writeFile(outputFilename, JSON.stringify(osmData, null, 2), 'utf-8');
  console.log(`Converted data saved to: ${outputFilename}`);
}

/**
 * Saves converted OSM data to a file in XML format.
 * @param {string} filename - Original filename to derive the output filename.
 * @param {string} osmXmlData - Converted OSM XML data to save.
 */
async function saveToXmlFile(filename, osmXmlData) {
  const outputFilename = filename.replace('.geojson', '.osm.xml');
  await fs.writeFile(outputFilename, osmXmlData, 'utf-8');
  console.log(`Converted XML data saved to: ${outputFilename}`);
}


export { 
  convertBatchFeatures, 
  geojsonToOsmXml, 
  saveToFile, 
  saveToXmlFile 
};
