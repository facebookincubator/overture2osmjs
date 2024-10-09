#!/usr/bin/env node
import { exec } from 'child_process';

const bbox = '-71.068,42.353,-71.058,42.363';
const format = 'geojson';
const type = 'place';
const output = 'lagos.geojson';

const command = `overturemaps download --bbox=${bbox} -f ${format} --type=${type} -o ${output}`;

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Output: ${stdout}`);
});
