import axios from 'axios';



async function getAddressFromOverture(overData) {
    const query = `${overData.freeform}, ${overData.locality}, ${overData.region}, ${overData.country}`;
    try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                q: query,
                format: 'json',
                addressdetails: 1,
                limit: 1,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from OpenStreetMap:', error);
        return [];
    }
}

// Suggest corrections for missing address fields
function suggestCorrections(address) {
    let suggestions = [];
    if (!address.street_name) {
        suggestions.push('Suggested street name: Rua Espanha');
    }

    if (!isValidPostcode(address.postcode)) {
        suggestions.push('Suggested postcode: 62050-255');
    }

    if (!address.city) {
        suggestions.push('Suggested city: Sobral');
    }

    if (!address.state) {
        suggestions.push('Suggested state: Ceará');
    }

    if (!address.country) {
        suggestions.push('Suggested country: Brasil');
    }

    if (suggestions.length === 0) {
        suggestions.push('No corrections needed. Address appears to be valid.');
    }

    return suggestions;
}

// Helper function to validate postcode format (example for Brazil)
function isValidPostcode(postcode) {
    const postcodePattern = /^[0-9]{5}-[0-9]{3}$/;
    return postcodePattern.test(postcode);
}

export { getAddressFromOverture, suggestCorrections };
