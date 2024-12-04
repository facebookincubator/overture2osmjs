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

