"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemsByStation = getItemsByStation;
var fs = require("fs");
var csv_parse_1 = require("csv-parse");
function getItemsByStation(req, res) {
    var records = [];
    var uic = req.params.uic;
    var readStream = fs.createReadStream(process.env.CSVFILE).pipe((0, csv_parse_1.parse)({
        delimiter: ";",
        columns: true,
    }));
    readStream.on("readable", function () {
        var record;
        while ((record = readStream.read()) !== null) {
            if (record["Code UIC"] === uic)
                records.push(record["Nature d'objets"]);
        }
    });
    // Catch any error
    readStream.on("error", function (err) {
        console.error(err.message);
    });
    readStream.on("end", function () {
        res.status(200);
        res.send(records);
    });
}
