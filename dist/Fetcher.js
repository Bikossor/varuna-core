"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var p = require("path");
var Fetcher = /** @class */ (function () {
    function Fetcher() {
    }
    Fetcher.prototype.fetch = function (path) {
        if (!fs.existsSync(path)) {
            throw new Error("Invalid path!");
        }
        var directories = fs.readdirSync(path);
        var res = {};
        directories.forEach(function (dir) {
            res[dir] = fs.readdirSync(p.join(path, dir));
        });
        return res;
    };
    ;
    return Fetcher;
}());
exports.Fetcher = Fetcher;
;
