const express = require("express");
const fs = require("fs");
import { parse } from "csv-parse";
const app = express();
const file = "./objets-trouves-restitution.csv";

const records: any[] = [];
const parser = parse({ delimiter: `;`, columns: true, from: 2 });
parser.on("readable", function () {
  let record;
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
app.get("/", (req: any, res: any) => {
  res.send("Successfull response.");
});

app.get("/download", (req: any, res: any) => {
  res.download(file);
});

app.get("/:uic", (req: any, res: any) => {
  const uic = req.params.uic;
  console.log(uic);
  const readStream = fs.createReadStream(file).pipe(parser);
  res.send(
    records
      .filter((record) => record["Code UIC"] === uic)
      .map((record) => record["Nature d'objets"])
  );
});

app.listen(3000, () => console.log("listening on port 3000"));
