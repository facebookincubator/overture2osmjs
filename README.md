# Overture to OSM Data Converter

## Demo
See the demo at https://facebookincubator.github.io/overture2osmjs 

The source of the demo is in `demo/index.js`

## Library
You can find library distributables in `dist/`. It should be on npm soon!

The main function is `overtureToOSMData(overtureFeature, processAddress)`. 

`overtureFeature` is a [Overture Place-type feature](https://docs.overturemaps.org/schema/reference/places/place/), which will be converted to OSM tags. `processAddress` is a boolean, if set to True it will also do a best-effort conversion of the address using the Nominatim API. Converting an address will need network access and takes about half a second, while without it the processing is almost instant.

The function is asynchronous, so the output is wrapped in a promise. It returns an object where the properties are OpenStreetMap tags. See https://wiki.openstreetmap.org/wiki/Tags for more info.

## Command-line Utility
You can test the library using the CLI utility provided. It needs a recent version of `node` installed.

You also need to run `npm install` to install its dependencies.

`node o2o-cli.js <filename> [--output <console|file|both|xml>] [-a/--address]`
Process an Overture .geojson file. By default it will convert it to all possible formats, without address processing. The `-a` switch will turn on address processing, which is set to only process one feature per second because of Nominatim API limits.


## ML/AI: Address Validation and Prediction

This section outlines how to use the machine learning model to validate and predict address data based on a neural network.

### **Overview**

This system leverages a neural network to predict whether an address is valid based on various features like `freeform`, `locality`, `region`, and `country`. The model uses a trained neural network to classify the input and provide a confidence score for its prediction.

### **Model Files**

- **validatedAddress.json**: This file contains the pre-trained neural network model. It is loaded into the script and used to process address data.
- **vocab.json**: This file includes the vocabulary of possible values for the address components (`freeform`, `locality`, `region`, `country`). It is used to encode the input data into a format that the model can understand.

### **Key Components**

#### 1. **Neural Network Model (brain.js)**

The model is implemented using `brain.js`, a simple neural network library for JavaScript. The neural network is trained to classify address data based on a variety of features (e.g., locality, region, country) and predicts the likelihood of an address being valid or not.

#### 2. **Encoding Input**

The input address is encoded into an array of binary values. Each feature of the address (e.g., `freeform`, `locality`, `region`, `country`) is represented as a vector where each element corresponds to a unique feature in the vocabulary file. If a feature is present in the input, it is marked as `1`; otherwise, it is marked as `0`.

#### 3. **Address Validation**

The system checks if all required address fields (`freeform`, `locality`, `region`, `country`) are present. If any fields are missing, it will prompt the user to provide them.

#### 4. **Dynamic Suggestions**

Based on the user's input, the system can suggest possible values for missing fields. For example:
- If the user provides a `locality` (e.g., "Springfield"), the system can suggest potential regions and countries associated with that locality.

#### 5. **Model Prediction**

Once all required fields are provided, the input is encoded and passed to the neural network. The model then outputs a prediction with a confidence score indicating the likelihood of the address being valid.

### **How to Use**

1. **Run the Script**:

To run the model and prompt the user for address input, execute the script:

```bash
node testAddressModel.js
```

2. **Enter Address**:

The script will ask you to input an address in JSON format, such as:

```json
{
  "freeform": "1234 Elm St",
  "locality": "Springfield",
  "region": "",
  "country": ""
}
```

3. **Missing Fields and Suggestions**:

If any fields are missing, the script will prompt you to provide them. It will also provide dynamic suggestions for fields like `region` and `country` based on the `locality` entered.

4. **Model Prediction Result**:

Once all fields are provided, the model will process the input and output a prediction:

```bash
Model prediction result: { "validity": "true", "confidence": 0.98 }
```

- **`validity`**: Indicates whether the address is valid (true/false).
- **`confidence`**: A confidence score (between 0 and 1) indicating how likely the address is valid based on the model’s training.

### **Example**

#### Input:

```json
{
  "freeform": "1234 Elm St",
  "locality": "Springfield",
  "region": "",
  "country": ""
}
```

#### Suggested Output:

```bash
Please enter a value for region: Illinois
Suggested values for region: Illinois, Missouri, Ohio
Please enter a value for country: USA
Suggested values for country: USA, Canada, UK
Model prediction result: { "validity": "true", "confidence": 0.98 }
```

### **Validation Function**

The `validateAddress` function checks if the required fields are provided. It returns a list of missing fields that need to be filled:

```javascript
function validateAddress(address) {
    const requiredFields = ['freeform', 'locality', 'region', 'country'];
    const missingFields = requiredFields.filter(field => !address[field]);
    return missingFields;
}
```

### **Suggestions for Missing Fields**

The `suggestField` function provides dynamic suggestions for certain fields based on the provided input. For example, if the locality is "Springfield", it suggests possible regions and countries:

```javascript
async function suggestField(field, input) {
    if (field === "region" && input.locality) {
        if (input.locality.toLowerCase().includes("springfield")) {
            return ["Illinois", "Missouri", "Ohio"];
        }
        return ["California", "Texas", "New York"]; // Default suggestions
    }

    if (field === "country" && input.locality) {
        return ["USA", "Canada", "UK"];
    }

    return []; // Return empty array for other fields
}
```

### **Future Enhancements**

- **Model Updates**: The model can be retrained with more diverse address data to improve predictions.
- **API Integration**: The system could be extended to fetch real-time suggestions from external APIs for regions and countries.
- **Extended Validation**: Additional fields and more complex address structures can be incorporated for advanced use cases.

### **Dependencies**

- `brain.js`: For implementing and running the neural network.
- `readline`: For handling user input through the command line.

To install the necessary dependencies, run:

```bash
npm install brain.js readline
```


