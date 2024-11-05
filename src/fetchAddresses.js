async function getNominatimAddress(lat, lon) {
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
  return data.features[0].properties;
}

export {getNominatimAddress};
