import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { FilesService } from './files.service';
import { CsvParser } from 'nest-csv-parser';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly csvParser: CsvParser,
  ) {}
  @Get(['/download'])
  downloadFile(): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), 'objets-trouves-restitution.csv'),
    );
    return new StreamableFile(file, {
      type: 'text/csv',
      disposition: 'attachment; filename="objets-trouves-restitution.csv"',
    });
  }

  @Get(['/file'])
  parseCSV() {
    return this.filesService.parseCSVFile();
  }
}
