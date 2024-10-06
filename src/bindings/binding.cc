#include <nan.h>
#include <vector>
#include <string>
#include <nlohmann/json.hpp> 

using json = nlohmann::json;

void ConvertToOSM(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    if (info.Length() < 1) {
        Nan::ThrowTypeError("Wrong number of arguments");
        return;
    }

    if (!info[0]->IsString()) {
        Nan::ThrowTypeError("Expected a string as argument");
        return;
    }

    v8::String::Utf8Value input(info[0]->ToString(Nan::GetCurrentContext()).ToLocalChecked());
    std::string overtureData = std::string(*input);
    // Parse Overture GeoJSON data
    json geoJsonData = json::parse(overtureData);
    // Create an OSM-compatible JSON object
    json osmData;
    osmData["version"] = "0.6"; // OSM version
    osmData["generator"] = "Overture to OSM Converter";

    std::vector<json> nodes;

    for (const auto& feature : geoJsonData["features"]) {
        json osmNode;
        osmNode["type"] = "node"; 
        osmNode["id"] = -static_cast<int>(nodes.size()) - 1; 

        // Setting coordinates
        if (feature.contains("geometry") && feature["geometry"].contains("coordinates")) {
            osmNode["lat"] = feature["geometry"]["coordinates"][1]; // Latitude
            osmNode["lon"] = feature["geometry"]["coordinates"][0]; // Longitude
        }

        // Setting tags based on properties
        if (feature.contains("properties")) {
            const auto& properties = feature["properties"];
            if (properties.contains("name")) {
                osmNode["tags"]["name"] = properties["name"];
            }
            if (properties.contains("type")) {
                osmNode["tags"]["amenity"] = properties["type"]; 
            }
        }

        nodes.push_back(osmNode);
    }

    // Setting the nodes in the OSM data
    osmData["elements"] = nodes;

    // Converting osmData back to string to return to Node.js
    std::string osmDataString = osmData.dump();
    info.GetReturnValue().Set(Nan::New(osmDataString).ToLocalChecked());
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(Nan::New("convertToOSM").ToLocalChecked(),
                 Nan::New<v8::FunctionTemplate>(ConvertToOSM)->GetFunction(Nan::GetCurrentContext()).ToLocalChecked());
}

NODE_MODULE(overture_bindings, Init)
