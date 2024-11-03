import { normalizeProperties, simplifyGeometry } from './normalize.js';

/**
 * Validates a GeoJSON file.
 * 
 * @param {object} geojson - Parsed GeoJSON object.
 * @returns {boolean} - True if valid, throws an error otherwise.
 */
export function validateGeoJSON(geojson) {
    if (!geojson) {
        throw new Error("No data provided. Please provide a valid GeoJSON object.");
    }

    if (geojson.type !== 'FeatureCollection') {
        throw new Error("Invalid GeoJSON format. Must be a 'FeatureCollection'.");
    }

    if (!Array.isArray(geojson.features) || geojson.features.length === 0) {
        throw new Error("GeoJSON must contain at least one feature.");
    }

    geojson.features.forEach(feature => {
        const normalizedFeature = normalizeFeature(feature);
        validateFeature(normalizedFeature);
    });

    return true;
}

/**
 * Single GeoJSON feature validation.
 * 
 * @param {object} feature - GeoJSON feature to validate.
 * @throws Error if the feature is invalid.
 */
export function validateFeature(feature) {
    if (!feature || feature.type !== 'Feature') {
        throw new Error("Invalid feature format. Each feature must have type 'Feature'.");
    }

    if (!feature.geometry || !validateGeometry(feature.geometry)) {
        throw new Error(`Feature ${feature.id || 'without ID'} has an invalid or missing geometry.`);
    }

    if (!feature.properties || typeof feature.properties !== 'object') {
        throw new Error(`Feature ${feature.id || 'without ID'} has invalid or missing properties.`);
    }

    if (feature.id && typeof feature.id !== 'string' && typeof feature.id !== 'number') {
        throw new Error(`Feature ${feature.id} has an invalid ID.`);
    }

    // Additional validation for specific properties
    const requiredProperties = ['placeName', 'streetName', 'countryCode'];
    requiredProperties.forEach(prop => {
        if (!feature.properties[prop]) {
            throw new Error(`Feature ${feature.id || 'without ID'} is missing essential property: ${prop}.`);
        }
    });
}

/**
 * Normalizes and simplifies a feature.
 * 
 * @param {object} feature - GeoJSON feature to normalize.
 * @returns {object} - Normalized feature.
 */
const normalizeFeature = (feature) => {
    const normalizedProperties = normalizeProperties(feature);
    const simplifiedGeometry = simplifyGeometry(feature);
    
    return {
        ...feature,
        properties: normalizedProperties,
        geometry: simplifiedGeometry,
    };
};

/**
 * Geometry validation.
 * 
 * @param {object} geometry - GeoJSON geometry object.
 * @returns {boolean} - True if geometry is valid.
 */
export function validateGeometry(geometry) {
    if (!geometry.type) {
        throw new Error("Geometry is missing the 'type' field.");
    }

    const validTypes = ['Point', 'LineString', 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon'];
    if (!validTypes.includes(geometry.type)) {
        throw new Error(`Invalid geometry type: ${geometry.type}.`);
    }

    if (!Array.isArray(geometry.coordinates)) {
        throw new Error("Geometry is missing valid 'coordinates'.");
    }

    return validateCoordinates(geometry.coordinates, geometry.type);
}

/**
 * Coordinates validation (based on geometry type).
 * 
 * @param {Array} coordinates - Coordinates array.
 * @param {string} type - Geometry type.
 * @returns {boolean} - True if coordinates are valid.
 */
export function validateCoordinates(coordinates, type) {
    switch (type) {
        case 'Point':
            if (coordinates.length !== 2) {
                throw new Error("Point geometry must have exactly 2 coordinates.");
            }
            return validLatitude(coordinates[1]) && validLongitude(coordinates[0]);

        case 'LineString':
        case 'Polygon':
            if (!coordinates.every(coord => Array.isArray(coord) && coord.length === 2)) {
                throw new Error(`${type} must have valid 2D coordinate arrays.`);
            }
            return coordinates.every(coord => validLatitude(coord[1]) && validLongitude(coord[0]));

        default:
            throw new Error(`Unsupported geometry type: ${type}.`);
    }
}

function validLatitude(lat) {
    return lat >= -90 && lat <= 90;
}

function validLongitude(lon) {
    return lon >= -180 && lon <= 180;
}
