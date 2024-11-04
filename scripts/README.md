# Additional Scripts

These are mostly provided for future reference, even if they aren't immediately useful.

## sampleplaces.py

This script gets 1500 random places from overture maps.
You will need `duckdb` installed for this one. One way to do it is in a virtual environment.

`$ python -m venv .venv`
`$ source .venv/bin/activate`
`$ pip install duckdb`
`$ python sample_places.py`

If you run it, you should get a parquet formatted output.json file.
It will need some extra processing to turn into geojson, which you can do with the next script.

## parquet_geojson_converter.js

This will convert the json we get above and turn it into proper geojson.

`$ ./parquet_geojson_converter.js output.json`
You will see `output.json.geojson` in the folder, which is a Place style geojson file.
https://docs.overturemaps.org/schema/reference/places/place/

## json_dict_converter.js

This script was used to clean up an issue with the category dictionary, originally taken from
https://github.com/cbeddow/overture2osm/blob/main/overture2osm.json

`$ ./json_dict_converter.js overture2osm.json`
