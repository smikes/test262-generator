/*global module, require*/
(function () {
    "use strict";

    var generator = exports;

    exports.zeropad = function generator_zeropad(s) {
        var i = parseInt(s, 10);

        return (i < 10 ? "0" : "");
    };

    exports.test262_path = function generator_test262_path(section) {
        return "ch" +
            generator.zeropad(section) +
            generator.progressive_path(section);
    };

    exports.test262_sections = function generator_test262_sections(section) {
        return section.split(".");
    };

    exports.test262_progressive_sections = function generator_test262_progressive_sections(sections) {
        var result;

        result = sections.map(function each_section(e, i) {
            return sections.slice(0, i + 1).join(".");
        });

        return result;
    };

    exports.progressive_path = function generator_progressive_path(section) {
        return generator.test262_progressive_sections(
            generator.test262_sections(section)
        ).join("/");
    };

}());
