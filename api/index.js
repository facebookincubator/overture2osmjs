const express = require('express');
const { exec } = require('child_process');
const overtureToOsmData = require('./build/Release/overtureToOsmData');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


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

app.post('/convert', (req, res) => {
    const inputData = req.body; 

    try {
        const result = overtureToOsmData.convertData(inputData);
        res.status(200).json({ success: true, result });
    } catch (error) {
        console.error('Error using native addon:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
