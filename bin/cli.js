#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const { cwd, exit } = require("process");

const currentWorkingDir = cwd();
const configFileName = "varuna.config.js";
const configFilePath = path.join(currentWorkingDir, configFileName);

if (!fs.existsSync(configFilePath)) {
  console.error(`No "${configFileName}" was found at "${currentWorkingDir}"`);
  exit();
}

const varunaConfig = require(configFilePath);

console.log("Varuna CLI");
console.log(varunaConfig);
