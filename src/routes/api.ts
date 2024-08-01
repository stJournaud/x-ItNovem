import { Router } from "express";
import { downloadFile } from "../handlers/download";
import { getItemsByStation } from "../handlers/gare";

const router = Router();

router.get("/download", downloadFile);

router.get("/:uic", getItemsByStation);

export default router;
