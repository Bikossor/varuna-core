"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fetcher = void 0;
var fs = require("fs");
var p = require("path");
var Fetcher = /** @class */ (function () {
    function Fetcher() {
    }
    Fetcher.fetch = function (path) {
        if (!fs.existsSync(path)) {
            throw new Error("Invalid path!");
        }
        var directories = fs.readdirSync(path);
        var res = {};
        directories.forEach(function (dir) {
            var completePath = p.join(path, dir);
            if (fs.lstatSync(completePath).isDirectory()) {
                res[dir] = fs.readdirSync(completePath);
            }
        });
        return res;
    };
    ;
    return Fetcher;
}());
exports.Fetcher = Fetcher;
;
