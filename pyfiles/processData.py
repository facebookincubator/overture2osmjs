import json
import os
import sys

def geojson_to_osm(geojson_file, osm_file):
    # Read the GeoJSON file
    with open(geojson_file) as f:
        geojson_data = json.load(f)

    # Prepare OSM data structure
    osm_data = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<osm version="0.6" generator="OvertureToOSM">',  # Header for OSM XML
    ]

    # Process GeoJSON features
    for feature in geojson_data['features']:
        geometry = feature['geometry']
        properties = feature.get('properties', {})

        if geometry['type'] == 'Point':
            osm_data.append('  <node id="{}" lat="{}" lon="{}">'.format(
                properties.get('id', 0), 
                geometry['coordinates'][1],  # latitude
                geometry['coordinates'][0]   # longitude
            ))
            for key, value in properties.items():
                osm_data.append('    <tag k="{}" v="{}"/>'.format(key, value))
            osm_data.append('  </node>')

        elif geometry['type'] == 'Polygon':
            # Convert polygons to ways (may need further processing)
            osm_data.append('  <way id="{}">'.format(properties.get('id', 0)))
            for coord in geometry['coordinates'][0]:  # Assuming it's the first ring
                lat, lon = coord[1], coord[0]
                osm_data.append('    <nd ref="{}"/>'.format(f"{lat},{lon}"))
            for key, value in properties.items():
                osm_data.append('    <tag k="{}" v="{}"/>'.format(key, value))
            osm_data.append('  </way>')

    osm_data.append('</osm>')  # Close the OSM XML

    # Write the OSM data to file
    with open(osm_file, 'w') as f:
        f.write('\n'.join(osm_data))

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python processData.py <input_geojson_file> <output_osm_file>")
        sys.exit(1)

    geojson_file = sys.argv[1]
    osm_file = sys.argv[2]

    geojson_to_osm(geojson_file, osm_file)
    print(f"Successfully converted {geojson_file} to {osm_file}.")
