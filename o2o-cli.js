#!/usr/bin/env node
import * as fs from 'node:fs/promises';
import { convertOvertureDataToOSM } from './src/data/convertData.js'; // Import the conversion function
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
console.log(argv);

if (argv.help) {
    console.log(`
Overture to OSM Data Converter

usage: o2o-cli <file.geojson>

o2o-cli <file.geojson>    Parse geojson data containing Overture places into OSM format
`);
}

const filename = argv._[0];

if (!filename) {
    console.log("o2o-cli: Please enter a file name");
} else {
    try {
        const data = JSON.parse(await fs.readFile(filename, { encoding: 'utf-8' }));
        const osmData = await convertOvertureDataToOSM(data);
        // Output the converted OSM data
        console.log("Converted OSM Data:", JSON.stringify(osmData, null, 2));
        
        // Optionally, write the OSM data to a new file
        const outputFilename = filename.replace('.geojson', '-osm.json');
        await fs.writeFile(outputFilename, JSON.stringify(osmData, null, 2), { encoding: 'utf-8' });
        console.log(`OSM data saved to ${outputFilename}`);
    } catch (error) {
        console.error('File error:', error.message);
    }
}
