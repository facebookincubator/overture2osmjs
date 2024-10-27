import express from 'express';
import { validateGeoJSON } from '../validate.js';
import { convertBatchFeatures, geojsonToOsmXml, saveToFile, saveToXmlFile } from '../o2o-cli.js'; 

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Routing
app.post('/api/convert', async (req, res) => {
  const { files } = req.body;

  if (!Array.isArray(files) || files.length === 0) {
    return res.status(400).json({ error: 'No files provided for conversion.' });
  }

  try {
    const results = [];

    for (const file of files) {
      const data = JSON.parse(file.content);
      
      validateGeoJSON(data);

      const osmData = convertBatchFeatures(data.features);
      const osmXmlData = geojsonToOsmXml(data.features);

      await saveToFile(file.name, osmData);
      await saveToXmlFile(file.name, osmXmlData);

      results.push({
        filename: file.name,
        osmData: osmData,
        osmXmlData: osmXmlData,
      });
    }

    res.status(200).json({ message: 'Conversion successful', results });
  } catch (error) {
    console.error('Error during conversion:', error);
    res.status(500).json({ error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
