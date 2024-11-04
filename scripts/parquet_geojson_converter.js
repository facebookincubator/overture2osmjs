#!/usr/bin/env node
import * as fs from 'node:fs/promises';

/*
 * Utility to convert parquet style data to geojson
*/

// Console argument, like "./parquet_geojson_converter.js [filename]"
const filename = process.argv[2];

if (filename) {
  try {
    const places = JSON.parse(await fs.readFile(filename, { encoding: 'utf-8' }));
    const features = [];
    for (const place of places) {
      // "POINT (-40.35 -3.7)" -> ["-40.35", "-3.7"]
      const coords = place.geometry.slice(7, -1).split(" ");
      const feature = {
        id: place.id,
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [parseFloat(coords[0]), parseFloat(coords[1])],
        },
        properties: {
          categories: place.categories,
          confidence: place.confidence,
          websites: place.websites,
          emails: place.emails,
          socials: place.socials,
          phones: place.phones,
          brand: place.brand,
          addresses: place.addresses,
          theme: "places",
          type: "place",
          version: 1,
          sources: place.sources,
          names: place.names,
        },
      };
      features.push(feature);
    }
    const geojson = {
      type: "FeatureCollection",
      features: features,
    };
    console.log(features);
    await fs.writeFile(filename + ".geojson", JSON.stringify(geojson, null, 4));
  } catch (error) {
    console.error(error.message);
  }
}
