/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { validateGeoJSON } from '../../validate.js';
import { 
  convertBatchFeatures, 
  geojsonToOsmXml, 
  saveToFile, 
  saveToXmlFile 
} from '../../o2o-cli.js';

export const convertGeoJsonToOsm = async (req, res) => {
  const { files } = req.body;

  if (!Array.isArray(files) || files.length === 0) {
    return res.status(400).json({ error: 'No files provided for conversion.' });
  }

  try {
    const results = [];

    for (const file of files) {
      try {
        const data = JSON.parse(file.content);
        validateGeoJSON(data);

        const osmData = convertBatchFeatures(data.features); 
        const osmXmlData = geojsonToOsmXml(data.features);
        
        // Save to file (OSM JSON) and XML file
        await saveToFile(file.name, osmData);
        await saveToXmlFile(file.name, osmXmlData);

        results.push({
          filename: file.name,
          osmData,
          osmXmlData,
        });
      } catch (fileError) {
        console.error(`Error processing file ${file.name}:`, fileError);
        results.push({ filename: file.name, error: 'Failed to process this file.' });
      }
    }

    res.status(200).json({ results });
  } catch (error) {
    console.error('Error during conversion:', error);
    res.status(500).json({ error: 'An error occurred during conversion.' });
  }
};

export const convertSingleFeatureToOsmJson = (feature) => {
  return {
    id: feature.id || generateOSMId(),
    type: feature.geometry.type,
    properties: feature.properties,
  };
};

export const convertSingleFeatureToOsmXml = (feature) => {
  const geometry = feature.geometry;
  const properties = feature.properties || {};
  let xmlData = '';

  if (geometry.type === 'Point') {
    xmlData += `<node id="${properties.id || generateOSMId()}" lat="${geometry.coordinates[1]}" lon="${geometry.coordinates[0]}">\n`;
    for (const [key, value] of Object.entries(properties)) {
      xmlData += `  <tag k="${key}" v="${value}"/>\n`;
    }
    xmlData += '</node>\n';
  } else if (geometry.type === 'Polygon') {
    xmlData += `<way id="${properties.id || generateOSMId()}">\n`;
    geometry.coordinates[0].forEach(([lon, lat]) => {
      xmlData += `  <nd ref="${lat},${lon}"/>\n`; // Correct order: lat, lon
    });
    for (const [key, value] of Object.entries(properties)) {
      xmlData += `  <tag k="${key}" v="${value}"/>\n`;
    }
    xmlData += '</way>\n';
  }

  return xmlData;
};

const generateOSMId = () => {
  return Math.floor(Math.random() * 1e6); 
};
