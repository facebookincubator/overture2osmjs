function overtureToOsmData(overtureData) {
  for (const feature of overtureData.features) {
    console.log(`name=${feature.properties.names.primary}`);
  }
}

export {overtureToOsmData};
