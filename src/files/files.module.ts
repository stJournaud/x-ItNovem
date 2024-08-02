import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { CsvModule } from 'nest-csv-parser';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [CsvModule],
})
export class FilesModule {}
