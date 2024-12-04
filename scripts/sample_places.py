#!/usr/bin/env python

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import duckdb
db = duckdb.connect()
db.execute("INSTALL spatial")
db.execute("INSTALL httpfs")
db.execute("""
LOAD spatial;
LOAD httpfs;
SET s3_region='us-west-2';
""")
places_url = "s3://overturemaps-us-west-2/release/2024-09-18.0/theme=places/type=*/*"
sample1 = db.execute(f"copy (select * from read_parquet('{places_url}') using sample 1500) to 'output.json' (array);").fetchall()
print("You can now use parquet_geojson_converter.js on output.json to turn it into a geojson file!")
