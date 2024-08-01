"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var csv_parse_1 = require("csv-parse");
var app = express();
var file = "./objets-trouves-restitution.csv";
var records = [];
var parser = (0, csv_parse_1.parse)({ delimiter: ";", columns: true, from: 2 });
parser.on("readable", function () {
    var record;
    while ((record = parser.read()) !== null) {
        records.push(record);
    }
});
// Catch any error
parser.on("error", function (err) {
    console.error(err.message);
});
parser.on("end", function () {
    console.log(records);
});
app.get("/", function (req, res) {
    res.send("Successfull response.");
});
app.get("/download", function (req, res) {
    res.download(file);
});
app.get("/:uic", function (req, res) {
    var uic = req.params.uic;
    console.log(uic);
    var readStream = fs.createReadStream(file).pipe(parser);
    res.send(records
        .filter(function (record) { return record["Code UIC"] === uic; })
        .map(function (record) { return record["Nature d'objets"]; }));
});
app.listen(3000, function () { return console.log("listening on port 3000"); });
