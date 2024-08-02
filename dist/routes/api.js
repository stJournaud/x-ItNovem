"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var download_1 = require("../handlers/download");
var gare_1 = require("../handlers/gare");
var router = (0, express_1.Router)();
router.get("/download", download_1.downloadFile);
router.get("/:uic", gare_1.getItemsByStation);
exports.default = router;
