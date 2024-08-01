const http = require("http");

const server = http
  .createServer((req: any, res: any) => {
    res.setHeader("Content-Ype", "text/plain");
    res.write("Try /download or /:uic");
    res.end();
  })
  .listen(3000, "localhost", () => {
    console.log("listening on port 3000");
  });
