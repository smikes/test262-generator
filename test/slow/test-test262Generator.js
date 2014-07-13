var test262Test = require("../../lib/test262Test"),
    fs = require("fs"),
    assert = require("assert");

describe("test262Generator", function() {
    it("generates an appropriate file", function () {
        var fixture = require("../../test/fixtures/S25.4.4.1_A1.1_T1.json"),
            expected = fs.readFileSync("test/fixtures/S25.4.4.1_A1.1_T1.js").toString(),
            generated = test262Test.generate(fixture);

        assert.equal(expected, generated);
    });
});
