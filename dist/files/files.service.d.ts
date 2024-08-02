import { CsvParser } from 'nest-csv-parser';
declare class Entity {
    Date: string;
    'Data et Heure de restitution': string;
    Gare: string;
    'Code UIC': number;
    "Nature d'objets": string;
    "Type d'objets": string;
    "Type d'enregistrement": string;
}
export declare class FilesService {
    private readonly csvParser;
    constructor(csvParser: CsvParser);
    parseCSVFile(): Promise<Entity[]>;
}
export {};
