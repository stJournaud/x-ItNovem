import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { CsvParser, ParsedData } from 'nest-csv-parser';

class Entity {
  Date: string;
  'Data et Heure de restitution': string;
  Gare: string;
  'Code UIC': number;
  "Nature d'objets": string;
  "Type d'objets": string;
  "Type d'enregistrement": string;
}

@Injectable()
export class FilesService {
  constructor(private readonly csvParser: CsvParser) {}

  async parseCSVFile() {
    const stream = createReadStream('../objets-trouves-restitution.csv');
    const { list: entities }: ParsedData<Entity> = await this.csvParser.parse(
      stream,
      Entity,
      null,
      1,
      { delimiter: `;`, columns: true },
    );
    return entities;
  }
}
