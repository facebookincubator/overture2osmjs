#include <nan.h>
#include <iostream>
#include <string>
#include "../include/json.hpp" 

using json = nlohmann::json;

// Single GeoJSON feature conversion to OSM format
void ConvertFeatureToOSM(const json& featureJson, json& osmObject) {
    osmObject["type"] = "node"; 
    if (featureJson.contains("id")) {
        osmObject["id"] = featureJson["id"];
    } else {
        osmObject["id"] = nullptr;
    }

}

// Single GeoJSON feature conversion to OSM. Return as a string
void ConvertSingleFeature(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    if (info.Length() < 1 || !info[0]->IsObject()) {
        Nan::ThrowTypeError("First argument must be a JSON object.");
        return;
    }

    v8::Local<v8::Object> geoJsonFeature = info[0]->ToObject(Nan::GetCurrentContext()).ToLocalChecked();
    v8::Local<v8::String> jsonString;

    if (!v8::JSON::Stringify(Nan::GetCurrentContext(), geoJsonFeature).ToLocal(&jsonString)) {
        Nan::ThrowError("Failed to convert object to JSON string.");
        return;
    }

    Nan::Utf8String utf8Value(jsonString);
    std::string geoJsonStr(*utf8Value);
    json featureJson = json::parse(geoJsonStr);
    
    // Create the OSM object and convert
    json osmObject;
    ConvertFeatureToOSM(featureJson, osmObject);

    // Convert OSM object to string and return
    std::string osmStr = osmObject.dump();
    info.GetReturnValue().Set(Nan::New(osmStr).ToLocalChecked());
}

// Convert an array of GeoJSON features to OSM format
void ConvertBatchFeatures(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    if (info.Length() < 1 || !info[0]->IsArray()) {
        Nan::ThrowTypeError("First argument must be a JSON array.");
        return;
    }

    v8::Local<v8::Array> geoJsonFeatures = info[0].As<v8::Array>();
    v8::Local<v8::Array> osmFeatures = Nan::New<v8::Array>();
    for (uint32_t i = 0; i < geoJsonFeatures->Length(); i++) {
        v8::Local<v8::Value> featureValue = geoJsonFeatures->Get(Nan::GetCurrentContext(), i).ToLocalChecked();
        if (featureValue->IsObject()) {
            v8::Local<v8::Object> geoJsonFeature = featureValue->ToObject(Nan::GetCurrentContext()).ToLocalChecked();
            v8::Local<v8::String> jsonString;

            if (!v8::JSON::Stringify(Nan::GetCurrentContext(), geoJsonFeature).ToLocal(&jsonString)) {
                Nan::ThrowError("Failed to convert object to JSON string.");
                return;
            }

            Nan::Utf8String utf8Value(jsonString);
            std::string geoJsonStr(*utf8Value);
            std::cout << "GeoJSON String: " << geoJsonStr << std::endl;
            json featureJson;
            try {
                featureJson = json::parse(geoJsonStr);
            } catch (const json::parse_error& e) {
                std::cerr << "Failed to parse GeoJSON string at index " << i << ": " << e.what() << std::endl;
                std::cerr << "GeoJSON that caused the error: " << geoJsonStr << std::endl;
                continue;  
            }

            // Convert to OSM format
            json osmObject;
            ConvertFeatureToOSM(featureJson, osmObject);

            // Convert the OSM object back to string
            std::string osmStr = osmObject.dump();
            Nan::Set(osmFeatures, i, Nan::New(osmStr).ToLocalChecked());
        } else {
            std::cerr << "Feature at index " << i << " is not an object." << std::endl;
        }
    }

    info.GetReturnValue().Set(osmFeatures);
}

void Init(v8::Local<v8::Object> exports) {
    Nan::Set(exports, Nan::New("convertSingleFeature").ToLocalChecked(),
             Nan::GetFunction(Nan::New<v8::FunctionTemplate>(ConvertSingleFeature)).ToLocalChecked());
    Nan::Set(exports, Nan::New("convertBatchFeatures").ToLocalChecked(),
             Nan::GetFunction(Nan::New<v8::FunctionTemplate>(ConvertBatchFeatures)).ToLocalChecked());
}

NODE_MODULE(overture, Init)
