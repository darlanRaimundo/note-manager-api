import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Note } from './interfaces/note.interface';
// import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NoteService {
  constructor(
    @Inject('NOTE_MODEL')
    private noteModel: Model<Note>,
  ) {}

  // async create(createNoteDto: CreateNoteDto): Promise<Note> {
  //   const createdNote = new this.noteModel(createNoteDto);
  //   return createdNote.save();
  // }

  async findAll(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }
}
