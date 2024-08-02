"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const files_service_1 = require("./files.service");
const nest_csv_parser_1 = require("nest-csv-parser");
let FilesController = class FilesController {
    constructor(filesService, csvParser) {
        this.filesService = filesService;
        this.csvParser = csvParser;
    }
    downloadFile() {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), 'objets-trouves-restitution.csv'));
        return new common_1.StreamableFile(file, {
            type: 'text/csv',
            disposition: 'attachment; filename="objets-trouves-restitution.csv"',
        });
    }
    parseCSV() {
        return this.filesService.parseCSVFile();
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.Get)(['/download']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", common_1.StreamableFile)
], FilesController.prototype, "downloadFile", null);
__decorate([
    (0, common_1.Get)(['/file']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "parseCSV", null);
exports.FilesController = FilesController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService,
        nest_csv_parser_1.CsvParser])
], FilesController);
//# sourceMappingURL=files.controller.js.map