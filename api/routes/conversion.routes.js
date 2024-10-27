import express from "express";
import { 
    convertGeoJSONToOSMJSON, 
    convertGeoJSONToOSMXML, 
    convertBatchGeoJSONToOSMJSON, 
    convertBatchGeoJSONToOSMXML, 
    getIndex 
} from "../controllers/conversion.controller";


const router = express.Router();


router.get("/", getIndex);
router.post("/json", convertGeoJSONToOSMJSON);
router.post("/xml", convertGeoJSONToOSMXML);
router.post("/batch/json", convertBatchGeoJSONToOSMJSON);
router.post("/batch/xml", convertBatchGeoJSONToOSMXML);


export default router;
