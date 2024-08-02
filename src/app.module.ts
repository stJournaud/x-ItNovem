import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationsModule } from './stations/stations.module';
import { FilesModule } from './files/files.module';
import { CsvModule } from 'nest-csv-parser';

@Module({
  imports: [StationsModule, FilesModule, CsvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
