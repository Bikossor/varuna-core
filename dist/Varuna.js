"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fetcher_1 = require("./Fetcher");
var Varuna = /** @class */ (function () {
    function Varuna(path) {
        if (!path || typeof path != "string") {
            throw new Error("Varuna needs a path!");
        }
        this.checklist = {};
        this.fetcher = new Fetcher_1.Fetcher();
        this.files = this.fetcher.fetch(path);
    }
    Varuna.prototype.addCheck = function (checkname, check) {
        this.checklist[checkname] = check;
    };
    Varuna.prototype.run = function () {
        for (var checkname in this.checklist) {
            this.checklist[checkname].result = this.checklist[checkname](this.files);
        }
    };
    Varuna.prototype.getResult = function () {
        return this.checklist;
    };
    return Varuna;
}());
exports.Varuna = Varuna;
