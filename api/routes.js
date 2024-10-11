import express from 'express';
import { convertOvertureDataToOSM } from './data/convertData';

const router = express.Router();

router.post('/process-data', async (req, res) => {
    try {
        const overtureData = req.body;

        // Validate incoming data
        if (!overtureData || !overtureData.features || !Array.isArray(overtureData.features)) {
            return res.status(400).json({ error: 'Invalid Overture data format' });
        }

        const osmData = await convertOvertureDataToOSM(overtureData);
        res.json({ osmData });
    } catch (error) {
        console.error('Error processing data:', error);
        
        if (error.message.includes('Invalid Overture data')) {
            return res.status(400).json({ error: error.message });
        } else {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});


export default router;
