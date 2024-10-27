import { geojsonToOsmXml, convertToOSMXML } from "../../validate.js";
import { convertSingleGeoJSONToOSMJSON, convertSingleGeoJSONToOSMXML } from "../../o2o-cli.js"; 

// Index route
export const getIndex = (req, res) => {
  res.json({ message: "Overture to OSM Converter!!!" });
};

// Convert single GeoJSON to OSM JSON
export const convertGeoJSONToOSMJSON = (req, res) => {
  try {
    const geojson = req.body;
    if (!geojson || !geojson.features || !Array.isArray(geojson.features)) {
      return res.status(400).json({ error: "Invalid GeoJSON input." });
    }

    const osmData = convertSingleGeoJSONToOSMJSON(geojson.features);
    res.json({ osmData });
  } catch (error) {
    console.error("Error converting GeoJSON to OSM JSON:", error);
    res.status(500).json({ error: "Failed to convert GeoJSON to OSM JSON." });
  }
};

// Convert single GeoJSON to OSM XML
export const convertGeoJSONToOSMXML = (req, res) => {
  try {
    const geojson = req.body;
    if (!geojson || !geojson.features || !Array.isArray(geojson.features)) {
      return res.status(400).json({ error: "Invalid GeoJSON input." });
    }

    const osmXMLData = convertSingleGeoJSONToOSMXML(geojson.features);
    res.set("Content-Type", "application/xml");
    res.send(osmXMLData);
  } catch (error) {
    console.error("Error converting GeoJSON to OSM XML:", error);
    res.status(500).json({ error: "Failed to convert GeoJSON to OSM XML." });
  }
};

// Batch convert GeoJSON to OSM JSON
export const convertBatchGeoJSONToOSMJSON = (req, res) => {
  try {
    const geojsonArray = req.body.geojsonArray;
    if (!Array.isArray(geojsonArray)) {
      return res.status(400).json({ error: "Invalid input. Expected an array of GeoJSON objects." });
    }

    const results = geojsonArray.map((geojson) => {
      if (!geojson.features || !Array.isArray(geojson.features)) {
        return { error: "Invalid GeoJSON object." };
      }
      return convertSingleGeoJSONToOSMJSON(geojson.features);
    });

    res.json({ osmData: results });
  } catch (error) {
    console.error("Error in batch conversion to OSM JSON:", error);
    res.status(500).json({ error: "Failed to batch convert GeoJSON to OSM JSON." });
  }
};

// Batch convert GeoJSON to OSM XML
export const convertBatchGeoJSONToOSMXML = (req, res) => {
  try {
    const geojsonArray = req.body.geojsonArray;
    if (!Array.isArray(geojsonArray)) {
      return res.status(400).json({ error: "Invalid input. Expected an array of GeoJSON objects." });
    }

    const results = geojsonArray.map((geojson) => {
      if (!geojson.features || !Array.isArray(geojson.features)) {
        return { error: "Invalid GeoJSON object." };
      }
      return convertToOSMXML(geojson.features); 
    });

    res.set("Content-Type", "application/xml");
    res.send(results.join("\n")); 
  } catch (error) {
    console.error("Error in batch conversion to OSM XML:", error);
    res.status(500).json({ error: "Failed to batch convert GeoJSON to OSM XML." });
  }
};
