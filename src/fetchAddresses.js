async function getNominatimAddress(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}8&format=geocodejson`;
  const response = await fetch();
}

export {getNominatimAddress};
