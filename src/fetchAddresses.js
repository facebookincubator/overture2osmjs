/**
 * Returns the count of fractional digits of the number
 * Ex: 1.234 -> 3, 100 -> 0, 3.14159 -> 5, etc.
 * Prone to floating point issues, like 0.44399999999999999 -> 3
 * We don't care since we only use this as a heuristic
 *
 * @param {number} num - Number with fractional digits to be counted
 *
 * @returns {number} The count of fractional digits
 */

function precision(num) {
  if (!isFinite(num) || !(typeof num == "number")) return 0;
  let exp = 1, precision = 0;
  while (Math.trunc(num * exp) / exp !== num) { exp *= 10; precision++; }
  return precision;
}

/**
 * Looks up address information from Nominatim
 *
 * @param {number} lat - Latitude of the address to look up
 * @param {number} lon - Longitude of the address
 *
 * @returns {object} An object with key/value pairs corresponding to OSM address tags
 */

async function getNominatimAddress(lat, lon) {
  // We use the geocodejson format because it has a more standardized format,
  // eg. city instead of town and village
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=geocodejson`;
  const response = await fetch(url, {
    headers: {
      // as per https://nominatim.org/release-docs/latest/api/Reverse/
      // The API respects Accept-Language headers, and will send localized data for the user's language
      // To standardize this, we're overriding the header, so we get the address as it appears at the location
      "Accept-Language": "*",
    }
  });
  const data = await response.json();

  // in case we're in the middle of the ocean, return empty address
  if (data.error) return {};

  const geocoding = data.features[0].properties.geocoding;
  const address = {};

  // If either latitude and longitude have less than 4 digits of precision, we count them as imprecise.
  // This is about 100m of error at the equator, and in testing
  const lowPrecisionCoords = Math.min(precision(lat), precision(lon)) < 4;

  if (!lowPrecisionCoords) {
    if (geocoding.housenumber) address["addr:housenumber"] = geocoding.housenumber;
    if (geocoding.street) address["addr:street"] = geocoding.street;
    if (geocoding.postcode) address["addr:postcode"] = geocoding.postcode;
  }

  if (geocoding.city) address["addr:city"] = geocoding.city;
  if (geocoding.country) address["addr:country"] = geocoding.country;
  return address;
}

export {getNominatimAddress};
