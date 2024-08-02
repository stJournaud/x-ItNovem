"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
dotenv.config();
var api_1 = require("./routes/api");
var app = express();
var PORT = process.env.PORT;
app.get("/", function (req, res) {
    res.send("Successfull response.");
});
app.use("/api", api_1.default);
app.listen(PORT, function () { return console.log("listening on port ".concat(PORT)); });
