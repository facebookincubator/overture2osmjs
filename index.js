import { loadModel, validateConvertedAddress } from './models/use.model.js';

async function main() {
    try {
        await loadModel();
        console.log('Model loaded successfully.');
        const convertedAddress = {
            street_name: 'Rua Espanha',
            postcode: '62050-255',
            city: 'Sobral',
            state: 'Ceará',
            country: 'Brasil',
        };

        validateConvertedAddress(convertedAddress);
        console.log('Address validation complete.');
    } catch (error) {
        console.error('Error during address validation:', error);
    }
}

main();
