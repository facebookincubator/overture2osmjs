import assert from 'node:assert/strict';
import { getOSMCategoryTags, overtureToOSMData } from '../src/overture2osm.js';
import { describe, it } from 'mocha';

describe("Overture2OSM Library", function () {
  describe("getOSMCategoryTags", function () {
    it("should load and read categories from overture2osm.json", function () {
      assert.deepEqual(getOSMCategoryTags("forest"), {landuse: "forest"});
    });
  });
});
