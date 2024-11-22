import { loadModel, validateConvertedAddress } from './models/use.model';

async function main() {
    await loadModel();
    validateConvertedAddress(convertedAddress);
}
main();
