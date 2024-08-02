"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = downloadFile;
function downloadFile(req, res) {
    res.download(process.env.CSVFILE);
    res.end();
}
