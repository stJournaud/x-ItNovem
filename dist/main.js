"use strict";
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("Successfull response.");
});
app.listen(3000, function () { return console.log("listening on port 3000"); });
