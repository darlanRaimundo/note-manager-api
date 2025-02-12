import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateNoteDTO } from './dto/create-note.dto';
import { Note } from './interfaces/note.interface';

@Injectable()
export class NoteService {
  constructor(
    @Inject('NOTE_MODEL')
    private noteModel: Model<Note>,
  ) {}

  async create(createNoteDTO: CreateNoteDTO) {
    const createdNote = new this.noteModel(createNoteDTO);
    return await createdNote.save();
  }

  async findAll(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }

  async findWithUser(userId: string): Promise<Note[]> {
    return this.noteModel.find({ userId }).exec();
  }

  async remove(id: string) {
    await this.noteModel.findByIdAndDelete(id);
    return `This action removes a #${id} user`;
  }
}
