import { Request, Response } from "express";
export function downloadFile(req: Request, res: Response) {
  res.download(process.env.CSVFILE as string);
  res.end();
}
