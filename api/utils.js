const { exec } = require('child_process');

function runPythonScript(scriptPath) {
    return new Promise((resolve, reject) => {
        exec(`python ${scriptPath}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Python script: ${error.message}`);
                return reject(error);
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return reject(new Error(stderr));
            }
            resolve(JSON.parse(stdout)); 
        });
    });
}

module.exports = {
    runPythonScript,
};
