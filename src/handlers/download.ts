import { Request, Response } from "express";

const file = "../objets-trouves-restitution.csv";

export function downloadFile(req: Request, res: Response) {
  res.download(file);
}
