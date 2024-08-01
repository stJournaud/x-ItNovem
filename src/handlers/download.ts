import { Request, Response } from "express";

// TODO; Passer en ENV
const file = "../objets-trouves-restitution.csv";

export function downloadFile(req: Request, res: Response) {
  res.download(file);
}
