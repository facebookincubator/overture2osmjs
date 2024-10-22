import assert from 'node:assert/strict';
import { getOSMCategoryTags, overtureToOSMData } from '../src/overture2osm.js';
import { describe } from 'mocha';

describe("Overture2OSM Library", function () {
  describe("getOSMCategoryTags", function () {
    assert.deepEqual(getOSMCategoryTags("forest"), {landuse: "forest"});
  });
});
