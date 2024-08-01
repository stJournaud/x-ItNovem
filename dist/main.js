"use strict";
var http = require("http");
var fs = require("fs");
var server = http
    .createServer(function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Try /download or /:uic");
    }
    else if (req.url === "/download") {
        res.writeHead(200, { "Content-Type": "text/csv" });
        var fileStream = fs.createReadStream("./objets-trouves-restitution.csv");
        fileStream.pipe(res);
        fileStream.on("finish", function () {
            res.send();
        });
    }
    else {
        res.writeHead(302, {
            Location: "/",
            //add other headers here...
        });
        res.end();
    }
})
    .listen(3000, "localhost", function () {
    console.log("listening on port 3000");
});
