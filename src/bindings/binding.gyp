{
  "targets": [
    {
      "target_name": "binding",
      "sources": [ "src/bindings/binding.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
