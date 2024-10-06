#!/usr/bin/env node
import { exec } from 'child_process';

const [,, bbox, format = 'geojson', type = 'place', output = 'lagos.geojson'] = process.argv;

if (!bbox) {
    console.error('Error: Bounding box is required.');
    process.exit(1);
}

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
    console.log(`Successfully fetched data and saved to ${output}`);
});
