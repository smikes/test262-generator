var generator = require("../lib/generator"),
    assert = require("assert");

describe("generator", function () {
    describe("test262_path", function () {
        it("generates paths based on spec sections", function () {
            assert.equal("ch07/7.2", generator.test262_path("7.2"));
            assert.equal("ch25/25.4/25.4.4/25.4.4.1", generator.test262_path("25.4.4.1"));
        });
    });

    describe("test262_sections", function () {
        it("splits a section", function () {
            assert.deepEqual(["7", "2"], generator.test262_sections("7.2"));
            assert.deepEqual(["25", "4", "4", "1"], generator.test262_sections("25.4.4.1"));
        });
    });

    describe("test262_progressive_sections", function () {
        it("combines section parts into paths", function () {
            assert.deepEqual(["7", "7.2"], generator.test262_progressive_sections(["7", "2"]));
            assert.deepEqual(["25", "25.4", "25.4.4", "25.4.4.1"], 
                             generator.test262_progressive_sections(["25", "4", "4", "1"]));
        });
    });

    describe("zeropad", function () {
        it("puts an initial zero on one-digit chapters", function () {
            assert.equal("0", generator.zeropad("7.2"));
            assert.equal("" , generator.zeropad("25.4.4.1"));
            assert.equal("" , generator.zeropad("annexB"));
        });
    });
});
