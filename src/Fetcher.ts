const fs = require("fs");
const p = require("path");

export class Fetcher {
    public static fetch(path: string) {
        if (!fs.existsSync(path)) {
            throw new Error("Invalid path!");
        }

        var directories = fs.readdirSync(path);
        var res = {};

        directories.forEach(dir => {
            res[dir] = fs.readdirSync(p.join(path, dir));
        });

        return res;
    };
};