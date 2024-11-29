import axios from 'axios';



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

// Updated function to dynamically suggest corrections
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

const addressToValidate = {
    street_name: "Rua Espanha",
    postcode: "62050-255",
    city: "Sobral",
    state: "Ceará",
    country: "Brasil",
    freeform: "APRAZIVEL",
};

async function validateAndSuggestCorrections(address) {
    const addressData = await getAddressFromOverture(address);  // Fetch address details
    if (!addressData || addressData.length === 0) {
        console.log('Address not found, suggesting corrections...');
        const corrections = suggestCorrections(address);
        corrections.forEach(suggestion => {
            console.log(suggestion);
        });
    } else {
        console.log('Address is valid:', addressData);
    }
}

validateAndSuggestCorrections(addressToValidate);

