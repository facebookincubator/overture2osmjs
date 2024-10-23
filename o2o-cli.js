#!/usr/bin/env node
import * as fs from 'node:fs/promises';

import {overtureToOSMData} from "./src/overture2osm.js";
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
if (argv.help) {console.log(`
Overture to OSM Data Converter

usage: o2o-cli <file.geojson>

o2o-cli <file.geojson>    Parse geojson data containing Overture places into OSM format
`)}

// underscore is an array of positional arguments
const filename = argv._[0];
if (!filename) {console.log("o2o-cli: Please enter file name") }
else {
    try {
        const data = JSON.parse(await fs.readFile(filename, {encoding: 'utf-8'}));
        for (const feature of data.features) {
            // just print to console for now
            console.log(overtureToOSMData(feature));
        }
    } catch(error) {
        console.error('File error:', error.message);
    }
}
