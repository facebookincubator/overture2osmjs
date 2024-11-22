async function getAddressFromOverture(overData) {
    const query = `${overData.freeform}, ${overData.locality}, ${overData.region}, ${overData.country}`;
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
            q: query,
            format: 'json',
            addressdetails: 1,
            limit: 1,
        },
    });
    return response.data;
}

function suggestCorrections(address) {
    console.log('Suggested street name: Rua Espanha');
    console.log('Suggested postcode: 62050-255');
}
