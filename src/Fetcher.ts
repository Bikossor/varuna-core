import fs = require("fs");
import p = require("path");

const ignoredDirectories: Array<string> = [".git", "node_modules"];

export class Fetcher {
  public static fetch(path: string) {
    if (!fs.existsSync(path)) {
      throw new Error("Invalid path!");
    }

    var directories = fs.readdirSync(path);
    var res = {};

    directories.forEach(dir => {
      const completePath = p.join(path, dir);

      if (
        fs.lstatSync(completePath).isDirectory() &&
        !ignoredDirectories.includes(dir)
      ) {
        res[dir] = fs.readdirSync(completePath);
      }
    });

    return res;
  }
}
