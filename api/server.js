import express from "express";
import bodyParser from "body-parser";
import { 
    convertGeoJSONToOSMJSON, 
    convertGeoJSONToOSMXML, 
    convertBatchGeoJSONToOSMJSON, 
    convertBatchGeoJSONToOSMXML, 
    getIndex
} from "./controllers/conversion.controller";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.get("/", getIndex);
app.post("/convert-to-osm-json", convertGeoJSONToOSMJSON);
app.post("/convert-to-osm-xml", convertGeoJSONToOSMXML);
app.post("/batch-convert-to-osm-json", convertBatchGeoJSONToOSMJSON);
app.post("/batch-convert-to-osm-xml", convertBatchGeoJSONToOSMXML);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
