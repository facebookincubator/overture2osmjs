#!/usr/bin/env node
import * as fs from 'node:fs/promises';
import minimist from 'minimist';
import pLimit from 'p-limit';
import { validateGeoJSON } from './validate';

const limit = pLimit(5);
const argv = minimist(process.argv.slice(2));

// Help message
if (argv.help) {
  console.log(`
    GeoJSON to OSM Data Converter

    usage: o2o-cli <file.geojson> [file2.geojson] [file3.geojson]... [--output <console|file|both|xml>] 

    Options:
      --output <console|file|both|xml>   Specify output method (default: both, xml for OSM XML output)
  `);
}

const filenames = argv._;
const outputOption = argv.output || 'both'; // Default output is 'both'

if (filenames.length === 0) {
  console.log('o2o-cli: Please provide at least one file name.');
} else {
  processFilesWithBatching(filenames)
    .then(() => console.log('Batch processing completed successfully.'))
    .catch((error) => console.error('Error during batch processing:', error.message));
}

/**
 * Processes multiple files with batching and limited concurrency.
 * @param {Array} filenames - List of file paths to process.
 */
async function processFilesWithBatching(filenames) {
  try {
    await Promise.all(
      filenames.map((filename) =>
        limit(async () => {
          console.log(`Processing file: ${filename}`);
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
        })
      )
    );
  } catch (error) {
    console.error('Error during file processing:', error.message);
  }
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
  console.log(`Converted data saved to: ${outputFilename}`);
}
