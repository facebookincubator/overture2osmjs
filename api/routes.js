import express from 'express';
import { convertOvertureDataToOSM } from './data/convertData';

const router = express.Router();

router.post('/process-data', async (req, res) => {
    try {
        const overtureData = req.body; 
        const osmData = await convertOvertureDataToOSM(overtureData);
        res.json({ osmData }); 
    } catch (error) {
        res.status(500).json({ error: 'Error processing data' });
    }
});

export default router;
