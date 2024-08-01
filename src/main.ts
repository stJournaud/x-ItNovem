const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req: any, res: any) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Try /download or /:uic");
    } else if (req.url === "/download") {
      res.writeHead(200, { "Content-Type": "text/csv" });
      const fileStream = fs.createReadStream(
        "./objets-trouves-restitution.csv"
      );
      fileStream.pipe(res);
      fileStream.on("finish", function () {
        res.send();
      });
    } else {
      res.writeHead(302, {
        Location: "/",
        //add other headers here...
      });
      res.end();
    }
  })
  .listen(3000, "localhost", () => {
    console.log("listening on port 3000");
  });
