(function () {
    'use strict';

    var test262Test = exports,
        wellKnownProperties = [
            {
                name: "noStrict",
                value: null
            }, {
                name: "onlyStrict",
                value: null
            }, {
                name: "negative",
                value: [null, String]
            }, {
                name: "hostObject",
                value: null
            }, {
                name: "reviewers",
                value: String
            }, {
                name: "author",
                value: String
            }
        ];

    exports.getHeader = function test262Test_getHeader() {
        return [
            '// Copyright 2014 Ecma International.  All rights reserved.',
            '/// Ecma International makes this code available under the terms and conditions set',
            '/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the',
            '/// "Use Terms").   Any redistribution of this code must retain the above',
            '/// copyright and this notice and otherwise comply with the Use Terms.',
            '' /* note final blank line */
        ].join("\n");
    };

    exports.makeDocComment = function test262Test_makeDocComment(props) {

        return "/**\n" +
            test262Test.makeDocumentComment(props) +
            test262Test.makePropertyComment(props) +
            " */\n";
    };

    exports.makePropertyComment = function test262Test_makePropertyComment(props) {
        // support well known properties only

        if (!props) {
            return "";
        }

        return wellKnownProperties.map(function (supportedProperty) {
            var name = supportedProperty.name,
                value = props[name];
            if (value) {
                return " * @" + name + " " + value + "\n";
            }
            return "";
        }).join("");
    };

    exports.makeDocumentComment = function test262Test_makeDocumentComment(props) {
        if (props && props.description) {
            return " * " + props.description + "\n" +
                " * \n";
        }

        return "";
    };

    exports.makeSimpleBody = function test262Test_makeSimpleBody(props) {
        return [
            "// CHECK#1",
            "var x = " + props.expression + ";",
            "if (x !== " + props.expected + ") {",
            "    $ERROR('#1: x = " + props.expression + "; x === " + props.expected + ". Actual: ' + (x));",
            "}",
            "\n"
        ].join("\n");
    };

    exports.generate = function test262Test_generate(props) {
        return test262Test.getHeader() +
            "\n" + test262Test.makeDocComment(props) +
            "\n" + test262Test.makeSimpleBody(props);
    };
}());
