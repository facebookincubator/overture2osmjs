/**
 * Normalizes an array of coordinates by rounding them to six decimal places.
 * @param {Array} coordinates - An array of coordinate pairs.
 * @returns {Array} - An array of normalized coordinates.
 */
 export const normalizeCoordinates = (coordinates) => {
    if (!Array.isArray(coordinates) || coordinates.length === 0) return []; 

    return coordinates.map(coord => {
        if (!Array.isArray(coord) || coord.length < 2 || !isFinite(coord[0]) || !isFinite(coord[1])) {
            console.warn("Invalid coordinate:", coord);
            return null; // Consider skipping invalid coordinates instead of defaulting to [0, 0]
        }
        return [
            parseFloat(coord[0].toFixed(6)), // Rounds longitude
            parseFloat(coord[1].toFixed(6))  // Rounds latitude
        ];
    }).filter(coord => coord !== null); // Filter out invalid coordinates
};


/**
 * Normalizes the place name to a standard format.
 * @param {string} name - The place name to normalize.
 * @returns {string} - The normalized place name.
 */
export const normalizePlaceName = (name) => {
    if (!name) return '';
    return name.trim().replace(/\s+/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
};


/**
 * Normalizes the street name to a standard format.
 * @param {string} name - The street name to normalize.
 * @returns {string} - The normalized street name.
 */
export const normalizeStreetName = (street) => {
    if (!street) return '';
    const abbreviations = { 
        "St": "Street", 
        "Rd": "Road", 
        "Ave": "Avenue", 
        "Cr": "Crescent", 
        "Cl": "Close" 
    }; 
    const words = street.split(' ').map(word => abbreviations[word] || word); 
    return words.join(' ').replace(/\b\w/g, char => char.toUpperCase());
};


/**
 * Normalizes the country code to a standard format.
 * @param {string} code - The country code to normalize.
 * @returns {string} - The normalized country code.
 */
export const normalizeCountryCode = (code) => {
    if (!code) return '';
    return code.trim().toUpperCase(); // Ensures ISO 3166-1 alpha-2 format
};


/**
 * Normalizes the postal code to a standard format.
 * @param {string} postalCode - The postal code to normalize.
 * @returns {string} - The normalized postal code.
 */
export const normalizePostalCode = (postalCode) => {
    if (!postalCode) return '';
    return postalCode.replace(/\s+/g, ''); // Removes whitespace
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
        properties.highway = properties.road; // Rename 'road' to 'highway'
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

    const simplifiedGeometry = simplifyGeometry(feature); 
    if (!simplifiedGeometry) {
        console.warn("Simplified geometry is invalid:", simplifiedGeometry);
        return null; 
    }

    return {
        ...feature,
        properties: normalizedProperties,
        geometry: simplifiedGeometry, 
    };
};


/**
 * Simplifies the geometry of the feature.
 * @param {Object} feature - The feature object containing geometry to simplify.
 * @returns {Object} - The simplified geometry object.
 */
export const simplifyGeometry = (feature) => {
    if (feature.geometry && feature.geometry.coordinates) {
        feature.geometry.coordinates = normalizeCoordinates(feature.geometry.coordinates);
        return feature.geometry; 
    } else {
        console.warn("Geometry or coordinates are undefined:", feature.geometry);
        return null; 
    }
};
