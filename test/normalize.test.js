import { expect } from "chai";
import {
    normalizeCoordinates,
    normalizePlaceName,
    normalizeStreetName,
    normalizeCountryCode,
    normalizePostalCode,
    normalizeProperties,
    normalizeFeature,
} from "../normalize.js";

describe("Normalization Functions", () => {
    describe("normalizeCoordinates", () => {
        it("should normalize coordinates to six decimal places", () => {
            const input = [[1.123456789, 2.987654321], [1.123456, 2.987654]];
            const expected = [[1.123457, 2.987654], [1.123456, 2.987654]];
            const result = normalizeCoordinates(input);
            expect(result).to.deep.equal(expected);
        });

        it("should return an empty array for invalid input", () => {
            expect(normalizeCoordinates([])).to.deep.equal([]);
            expect(normalizeCoordinates(null)).to.deep.equal([]);
            expect(normalizeCoordinates({})).to.deep.equal([]);
        });

        it("should skip invalid coordinates", () => {
            const input = [[1.123456, 2.987654], [null, undefined], [1, 2]];
            const expected = [[1.123456, 2.987654], [1, 2]];
            const result = normalizeCoordinates(input);
            expect(result).to.deep.equal(expected);
        });
        it("should normalize street names with additional abbreviations", () => {
            expect(normalizeStreetName("123 Elm Blvd")).to.equal("123 Elm Boulevard");
            expect(normalizeStreetName("456 Maple Pkwy")).to.equal("456 Maple Parkway");
            expect(normalizeStreetName("789 Oak Ln")).to.equal("789 Oak Lane");
        });
    
        it("should handle names with apostrophes correctly", () => {
            expect(normalizeStreetName("St. John's Road")).to.equal("John's Road");
            expect(normalizeStreetName("O'Reilly St")).to.equal("O'Reilly Street");
        });
    
        it("should capitalize all words correctly", () => {
            expect(normalizeStreetName("  100 main st   ")).to.equal("100 Main Street");
            expect(normalizeStreetName("pkwy to the center")).to.equal("Pkwy To The Center");
        });
    });

    describe("normalizePlaceName", () => {
        it("should normalize place names to standard format", () => {
            const input = "   some PLACE  ";
            const expected = "Some Place";
            const result = normalizePlaceName(input);
            expect(result).to.equal(expected);
        });

        it("should return an empty string for falsy input", () => {
            expect(normalizePlaceName(null)).to.equal("");
            expect(normalizePlaceName("")).to.equal("");
        });

        it("should handle single-word names", () => {
            const input = "   lagos  ";
            const expected = "Lagos";
            const result = normalizePlaceName(input);
            expect(result).to.equal(expected);
        });
    });

    describe("normalizeStreetName", () => {
        it("should normalize street names with abbreviations", () => {
            const input = "123 Main St";
            const expected = "123 Main Street";
            const result = normalizeStreetName(input);
            expect(result).to.equal(expected);
        });

        it("should return an empty string for falsy input", () => {
            expect(normalizeStreetName(null)).to.equal("");
            expect(normalizeStreetName("")).to.equal("");
        });

        it("should handle street names without abbreviations", () => {
            const input = "Baker Road";
            const expected = "Baker Road";
            const result = normalizeStreetName(input);
            expect(result).to.equal(expected);
        });
    });

    describe("normalizeCountryCode", () => {
        it("should normalize country codes to uppercase", () => {
            const input = "us";
            const expected = "US";
            const result = normalizeCountryCode(input);
            expect(result).to.equal(expected);
        });

        it("should return an empty string for falsy input", () => {
            expect(normalizeCountryCode(null)).to.equal("");
            expect(normalizeCountryCode("")).to.equal("");
        });

        it("should trim whitespace from country codes", () => {
            const input = "   ca   ";
            const expected = "CA";
            const result = normalizeCountryCode(input);
            expect(result).to.equal(expected);
        });
    });

    describe("normalizePostalCode", () => {
        it("should normalize postal codes by removing whitespace", () => {
            const input = " 12345 ";
            const expected = "12345";
            const result = normalizePostalCode(input);
            expect(result).to.equal(expected);
        });

        it("should return an empty string for falsy input", () => {
            expect(normalizePostalCode(null)).to.equal("");
            expect(normalizePostalCode("")).to.equal("");
        });

        it("should handle postal codes with no spaces", () => {
            const input = "90210";
            const expected = "90210";
            const result = normalizePostalCode(input);
            expect(result).to.equal(expected);
        });
    });

    describe("normalizeProperties", () => {
        it("should normalize properties correctly", () => {
            const feature = {
                properties: {
                    placeName: "  some place  ",
                    streetName: " 123 Main St  ",
                    countryCode: "  us  ",
                    postalCode: " 12345  ",
                    road: "Main Road"
                }
            };
            const expected = {
                placeName: "Some Place",
                streetName: "123 Main Street",
                countryCode: "US",
                postalCode: "12345",
                highway: "Main Road"
            };
            const result = normalizeProperties(feature);
            expect(result).to.deep.equal(expected);
        });

        it("should warn and return an empty object for missing properties", () => {
            const feature = {};
            const result = normalizeProperties(feature);
            expect(result).to.deep.equal({});
        });

        it("should log a warning for undefined properties", () => {
            const consoleWarnSpy = sinon.spy(console, "warn");
            const feature = { properties: undefined };
            const result = normalizeProperties(feature);
            expect(consoleWarnSpy.calledWith("Feature properties are undefined:", feature)).to.be.true;
            expect(result).to.deep.equal({});
            consoleWarnSpy.restore();
        });
    });

    describe("normalizeFeature", () => {
        it("should normalize the feature properties and geometry", () => {
            const feature = {
                geometry: {
                    coordinates: [[1.123456789, 2.987654321]],
                },
                properties: {
                    placeName: "  some place  ",
                    streetName: " 123 Main St  ",
                    countryCode: "  us  ",
                    postalCode: " 12345  ",
                }
            };
            const result = normalizeFeature(feature);
            expect(result).to.have.property("properties");
            expect(result).to.have.property("geometry");
            expect(result.properties.placeName).to.equal("Some Place");
            expect(result.geometry.coordinates).to.deep.equal([[1.123457, 2.987654]]);
        });

        it("should return null for invalid features", () => {
            const result = normalizeFeature(null);
            expect(result).to.be.null;

            const feature = { geometry: null };
            const result2 = normalizeFeature(feature);
            expect(result2).to.be.null;
        });

        it("should log warnings for undefined features or geometries", () => {
            const consoleWarnSpy = sinon.spy(console, "warn");
            const feature = { geometry: null, properties: {} };
            const result = normalizeFeature(feature);
            expect(consoleWarnSpy.calledWith("Feature or geometry is undefined:", feature)).to.be.true;
            expect(result).to.be.null;
            consoleWarnSpy.restore();
        });
    });
});
