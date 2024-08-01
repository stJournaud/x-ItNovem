"use strict";
var http = require("http");
var server = http
    .createServer(function (req, res) {
    console.log(req);
    res.setHeader("Content-Ype", "text/plain");
    res.write("Try /download or /:uic");
    res.end();
})
    .listen(3000, "localhost", function () {
    console.log("listening on port 3000");
});
