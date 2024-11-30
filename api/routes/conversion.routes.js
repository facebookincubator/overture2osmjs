/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import express from "express";
import { 
    convertSingleFeatureToOsmJson,
    convertSingleFeatureToOsmXml,
    convertGeoJsonToOsm 
} from "../controllers/conversion.controller.js";

const router = express.Router();

router.post('/batch-to-json', convertGeoJsonToOsm);
router.post('/batch-to-xml', convertGeoJsonToOsm); 
router.post('/json', (req, res) => {
    const { feature } = req.body;

    if (!feature) {
        return res.status(400).json({ error: 'No feature provided for conversion.' });
    }

    try {
        const osmData = convertSingleFeatureToOsmJson(feature);
        res.status(200).json({ osmData });
    } catch (error) {
        console.error('Error during JSON conversion:', error);
        res.status(500).json({ error: 'An error occurred during JSON conversion.' });
    }
});

router.post('xml', (req, res) => {
    const { feature } = req.body;

    if (!feature) {
        return res.status(400).json({ error: 'No feature provided for conversion.' });
    }

    try {
        const osmXmlData = convertSingleFeatureToOsmXml(feature);
        res.status(200).json({ osmXmlData });
    } catch (error) {
        console.error('Error during XML conversion:', error);
        res.status(500).json({ error: 'An error occurred during XML conversion.' });
    }
});

export default router;
