import { Request, Response } from "express";
export function downloadFile(req: Request, res: Response) {
  res.setHeader(
    "Content-disposition",
    "attachment; filename=objets-trouves-restitution.csv"
  );
  res.setHeader("Content-type", "text/csv");
  res.download(process.env.CSVFILE as string, function (err) {
    console.log(err);
  });
}
