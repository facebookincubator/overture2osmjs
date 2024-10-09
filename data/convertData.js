import { convertToOSM } from './bindings/binding'; 
import { runPythonScript } from './api/utils'; 




async function convertOvertureDataToOSM(overtureData) {
    try {
        if (!overtureData || !overtureData.features) {
            throw new Error('Invalid Overture data');
        }

        const osmDataArray = [];
        for (const feature of overtureData.features) {
            const overtureFeature = JSON.stringify(feature); 
            const osmFeature = convertToOSM(overtureFeature); 
            osmDataArray.push(osmFeature); 
        }

        await runPythonScript('src/pyfiles/processData.py');
        return osmDataArray; 
        
    } catch (error) {
        console.error(`Error converting data: ${error.message}`);
        throw error; 
    }
}

export { convertOvertureDataToOSM };
