import validateConvertedAddress from "./models/use.model";

const convertedAddress = {
    street_name: "Rua Espanha",
    postcode: "62050-255",
    city: "Sobral",
    state: "Ceará",
    country: "Brasil",
    freeform: "APRAZIVEL"
};

validateConvertedAddress(convertedAddress);
