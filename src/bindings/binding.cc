#include <nan.h>
#include <iostream>
#include <string>
#include <nlohmann/json.hpp>  

using json = nlohmann::json;

void ConvertSingleFeature(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    if (info.Length() < 1 || !info[0]->IsObject()) {
        Nan::ThrowTypeError("First argument must be a JSON object.");
        return;
    }

    v8::Local<v8::Object> geoJsonFeature = info[0]->ToObject(Nan::GetCurrentContext()).ToLocalChecked();
    Nan::Utf8String utf8Value(geoJsonFeature);

    std::string geoJsonStr(*utf8Value);
    json featureJson = json::parse(geoJsonStr);

    // Conversion to OSM format
    json osmObject;
    osmObject["type"] = "node"; 
    osmObject["id"] = featureJson["id"]; 


    std::string osmStr = osmObject.dump();
    info.GetReturnValue().Set(Nan::New(osmStr).ToLocalChecked());
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(Nan::New("convertSingleFeature").ToLocalChecked(),
                 Nan::New<v8::FunctionTemplate>(ConvertSingleFeature)->GetFunction(Nan::GetCurrentContext()).ToLocalChecked());
}

NODE_MODULE(overture, Init)
