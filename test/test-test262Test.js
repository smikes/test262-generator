var test262Test = require("../lib/test262Test"),
    assert = require("assert");

describe("test262Test", function () {
    describe("getHeader", function () {
        it("emits a boilerplate test header", function () {
            var header = test262Test.getHeader();

            assert.ok(header.match('Copyright'));
            assert.ok(header.match('Ecma'));
        });
    });

    describe("makeDocComment", function () {
        it("emits an empty docComment", function () {
            var docComment = test262Test.makeDocComment();

            assert.equal("/**\n */\n", docComment);
        });

        it("emits a well-known property in docComment", function () {
            var docComment = test262Test.makeDocComment({
                author: "Grace Hopper"
            });

            assert.equal("/**\n * @author Grace Hopper\n */\n", docComment);
        });

        it("supports description property in docComment", function () {
            var docComment = test262Test.makeDocComment({
                description: "Ensures 2+2 === 5",
                author: "Alan Turing"
            });

            assert.equal("/**\n * Ensures 2+2 === 5\n * \n * @author Alan Turing\n */\n", docComment);
        });
    });

    describe("makeSimpleBody", function () {
        it("formats a test object", function () {
            var result = test262Test.makeSimpleBody({
                expression: "2+2",
                expected: '4'
            });

            assert.equal("// CHECK#1\nvar x = 2+2;\nif (x !== 4) {\n" +
                         "    $ERROR('#1: x = 2+2; x === 4. Actual: ' + (x));\n" +
                         "}\n\n", result);

        });

        it("formats a test object with quotes in expected", function () {
            var result = test262Test.makeSimpleBody({
                expression: "typeof Promise.all",
                expected: '"function"'
            });

            assert.equal("// CHECK#1\nvar x = typeof Promise.all;\nif (x !== \"function\") {\n" +
                         "    $ERROR('#1: x = typeof Promise.all; x === \"function\". Actual: ' + (x));\n" +
                         "}\n\n", result);

        });
    });

    describe("generate", function () {
        it("does something plausible on empty properties", function () {
            var result = test262Test.generate({});
            // does not throw
        });
    });
});
