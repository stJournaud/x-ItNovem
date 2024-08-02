import { StreamableFile } from '@nestjs/common';
import { FilesService } from './files.service';
import { CsvParser } from 'nest-csv-parser';
export declare class FilesController {
    private readonly filesService;
    private readonly csvParser;
    constructor(filesService: FilesService, csvParser: CsvParser);
    downloadFile(): StreamableFile;
    parseCSV(): Promise<{
        Date: string;
        'Data et Heure de restitution': string;
        Gare: string;
        'Code UIC': number;
        "Nature d'objets": string;
        "Type d'objets": string;
        "Type d'enregistrement": string;
    }[]>;
}
