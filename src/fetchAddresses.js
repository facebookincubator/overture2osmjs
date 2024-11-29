/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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

  if (geocoding.housenumber) address["addr:housenumber"] = geocoding.housenumber;
  if (geocoding.street) address["addr:street"] = geocoding.street;
  if (geocoding.postcode) address["addr:postcode"] = geocoding.postcode;
  if (geocoding.city) address["addr:city"] = geocoding.city;
  if (geocoding.country) address["addr:country"] = geocoding.country;
  return address;
}

export {getNominatimAddress};
