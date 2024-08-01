const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
import apiRouter from "./routes/api";
import { Request, Response } from "express";
const app = express();

const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Successfull response.");
});

app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
