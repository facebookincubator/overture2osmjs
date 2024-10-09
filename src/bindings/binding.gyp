{
    "targets": [
        {
            "target_name": "overtureToOsmData",
            "sources": [ "src/bindings/binding.cc" ],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"  
            ]
        }
    ]
}
