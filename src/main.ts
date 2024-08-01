const express = require("express");
import apiRouter from "./routes/api";
const fs = require("fs");
import { parse } from "csv-parse";
import { Request, Response } from "express";
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
app.get("/", (req: Request, res: Response) => {
  res.send("Successfull response.");
});

app.use("/api", apiRouter);

app.listen(3000, () => console.log("listening on port 3000"));
