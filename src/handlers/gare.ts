import { Request, Response } from "express";
const fs = require("fs");
import { parse } from "csv-parse";
// TODO; Passer en ENV
const file = "../objets-trouves-restitution.csv";

export function getItemsByStation(req: Request, res: Response) {
  const records: any[] = [];
  const uic = req.params.uic;
  const readStream = fs.createReadStream(file).pipe(
    parse({
      delimiter: `;`,
      columns: true,
      from: 2,
      skip_records_with_error: true,
    })
  );
  readStream.on("readable", function () {
    let record;
    while ((record = readStream.read()) !== null) {
      if (record["Code UIC"] === uic) records.push(record["Nature d'objets"]);
    }
  });
  // Catch any error
  readStream.on("error", function (err: Error) {
    console.error(err.message);
  });
  readStream.on("end", function () {
    res.status(200);
    res.send(records);
  });
}
