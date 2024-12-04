/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Normalizes the place name to a standard format.
 * @param {string} name - The place name to normalize.
 * @returns {string} - The normalized place name.
 */
export const normalizePlaceName = (name) => {
    if (!name) return "";
    return name.trim().replace(/\s+/g, " ").replace(/\b\w/g, char => char.toUpperCase());
};


/**
 * Normalizes the street name to a standard format.
 * @param {string} name - The street name to normalize.
 * @returns {string} - The normalized street name.
 */
 export const normalizeStreetName = (street) => {
    if (!street) return "";
    
    const abbreviations = { 
        "St": "Street", 
        "St.": "Street", 
        "Rd": "Road", 
        "Ave": "Avenue", 
        "Blvd": "Boulevard",
        "Ln": "Lane",
        "Pkwy": "Parkway",
        "Ct": "Court",
        "Dr": "Drive",
        "Terr": "Terrace",
        "Cr": "Crescent", 
        "Cl": "Close",
        "Pl": "Place",
        "Hwy": "Highway",
        "Bvd": "Boulevard",
    };

    const words = street.split(" ").map(word => {
        const normalizedWord = abbreviations[word] || word;
        return normalizedWord.charAt(0).toUpperCase() + normalizedWord.slice(1).toLowerCase();
    });

    return words.join(" ").trim(); // Join words and trim whitespace
};


/**
 * Normalizes the country code to a standard format.
 * @param {string} code - The country code to normalize.
 * @returns {string} - The normalized country code.
 */
export const normalizeCountryCode = (code) => {
    if (!code) return "";
    return code.trim().toUpperCase(); // Ensures ISO 3166-1 alpha-2 format
};


/**
 * Normalizes the postal code to a standard format.
 * @param {string} postalCode - The postal code to normalize.
 * @returns {string} - The normalized postal code.
 */
export const normalizePostalCode = (postalCode) => {
    if (!postalCode) return "";
    return postalCode.replace(/\s+/g, ""); // Removes whitespace
};


/**
 * Normalizes the properties to a standard format.
 * @param {Object} feature - The feature object containing properties to normalize.
 * @returns {Object} - The normalized properties.
 */
export const normalizeProperties = (feature) => {
    const { properties } = feature;
    if (!properties) {
        console.warn("Feature properties are undefined:", feature);
        return {}; 
    }
    console.log("Raw properties:", properties);

    properties.placeName = normalizePlaceName(properties.placeName);
    properties.streetName = normalizeStreetName(properties.streetName);
    properties.countryCode = normalizeCountryCode(properties.countryCode);
    properties.postalCode = normalizePostalCode(properties.postalCode);

    if (properties.road) {
        properties.highway = properties.road; // Rename "road" to "highway"
        delete properties.road;
    }

    return properties; 
};


/**
 * Normalizes feature properties and ensures required fields are formatted correctly.
 * @param {Object} feature - The feature object containing properties to normalize.
 * @returns {Object} - The normalized properties object.
 */
export const normalizeFeature = (feature) => {
    if (!feature || !feature.geometry) {
        console.warn("Feature or geometry is undefined:", feature);
        return null; 
    }

    const normalizedProperties = normalizeProperties(feature); 
    if (!normalizedProperties) {
        console.warn("Normalized properties are invalid:", normalizedProperties);
        return null; 
    }

    return {
        ...feature,
        properties: normalizedProperties,
    };
};
