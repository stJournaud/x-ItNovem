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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const nest_csv_parser_1 = require("nest-csv-parser");
class Entity {
}
let FilesService = class FilesService {
    constructor(csvParser) {
        this.csvParser = csvParser;
    }
    async parseCSVFile() {
        const stream = (0, fs_1.createReadStream)('../objets-trouves-restitution.csv');
        const { list: entities } = await this.csvParser.parse(stream, Entity, null, 1, { delimiter: `;`, columns: true });
        return entities;
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nest_csv_parser_1.CsvParser])
], FilesService);
//# sourceMappingURL=files.service.js.map