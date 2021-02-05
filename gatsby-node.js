"use strict"
require("ts-node").register(require("./tsconfig.json"))
exports.createPages = require("./config/gatsby-node").createPages
