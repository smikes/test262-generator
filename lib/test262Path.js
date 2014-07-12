/*global module, require*/
(function () {
    "use strict";

    var test262Path = exports;

    exports.zeropad = function test262Path_zeropad(s) {
        var i = parseInt(s, 10);

        return (i < 10 ? "0" : "");
    };

    exports.pathFromSection = function test262Path_pathFromSection(section) {
        return "ch" +
            test262Path.zeropad(section) +
            test262Path.progressive_path(section);
    };

    exports.getSections = function test262Path_getSections(section) {
        return section.split(".");
    };

    exports.progressive_sections = function test262Path_progressive_sections(sections) {
        var result;

        /*jslint unparam:true*/
        result = sections.map(function each_section(e, i) {
            return sections.slice(0, i + 1).join(".");
        });

        return result;
    };

    exports.progressive_path = function test262Path_progressive_path(section) {
        return test262Path.progressive_sections(
            test262Path.getSections(section)
        ).join("/");
    };

}());
