const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// Initial script execution on server start
exec('python src/python/processData.py', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing Python script: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`Output from Python script: ${stdout}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
