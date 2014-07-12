var test262Path = require("../lib/test262Path"),
    assert = require("assert");

describe("test262Path", function () {
    describe("pathFromSection", function () {
        it("generates paths based on spec sections", function () {
            assert.equal("ch07/7.2", test262Path.pathFromSection("7.2"));
            assert.equal("ch25/25.4/25.4.4/25.4.4.1", test262Path.pathFromSection("25.4.4.1"));
        });
    });

    describe("getSections", function () {
        it("splits a section", function () {
            assert.deepEqual(["7", "2"], test262Path.getSections("7.2"));
            assert.deepEqual(["25", "4", "4", "1"], test262Path.getSections("25.4.4.1"));
        });
    });

    describe("test262_progressive_sections", function () {
        it("combines section parts into paths", function () {
            assert.deepEqual(["7", "7.2"], test262Path.progressive_sections(["7", "2"]));
            assert.deepEqual(["25", "25.4", "25.4.4", "25.4.4.1"],
                             test262Path.progressive_sections(["25", "4", "4", "1"]));
        });
    });

    describe("zeropad", function () {
        it("puts an initial zero on one-digit chapters", function () {
            assert.equal("0", test262Path.zeropad("7.2"));
            assert.equal("" , test262Path.zeropad("25.4.4.1"));
            assert.equal("" , test262Path.zeropad("annexB"));
        });
    });
});
