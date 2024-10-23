#!/usr/bin/env node
import * as fs from 'node:fs/promises';

/*
 * Little utility to take overture2osm.json and turn its tags from
 *
 * "osm_tags": [
 *     "office=insurance",
 *     "insurance=health"
 * ],
 *
 * to
 *
 * "osm_tags": {
 *     "office": "insurance",
 *     "insurance": "health"
 * },
*/

// Console argument, like "./json_dict_converter.js [filename]"
const filename = process.argv[2];

if (filename) {
  try {
    const dict = JSON.parse(await fs.readFile(filename, { encoding: 'utf-8' }));
    for (const entry in dict) {
      const osm_tags_obj = {};
      for (const tag of dict[entry].osm_tags) {
        const parts = tag.split('=');

        // should never happen I think
        if (parts.length != 2) console.error(parts);
        osm_tags_obj[parts[0]] = parts[1];
      }
      dict[entry].osm_tags = osm_tags_obj;
    }
    console.log(dict);
    await fs.writeFile(filename + "_obj", JSON.stringify(dict, null, 4));
  } catch (error) {
    console.error(error.message);
  }
}
