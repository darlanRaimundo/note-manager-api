import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { noteProviders } from './note.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NoteController],
  providers: [NoteService, ...noteProviders],
  exports: [NoteService],
})
export class NoteModule {}
