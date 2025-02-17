import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateNoteDTO } from './dto/create-note.dto';
import { Note } from './interfaces/note.interface';
import { UpdateNoteDTO } from './dto/update-note.dto';

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
    const notes = await this.noteModel.find({ userId }).exec();
    return notes;
  }

  async updateNote(id: string, updateNoteDTO: UpdateNoteDTO) {
    return this.noteModel
      .findByIdAndUpdate(id, {
        ...updateNoteDTO,
        updatedAt: new Date(),
      })
      .exec();
  }

  async remove(id: string) {
    return await this.noteModel.findByIdAndDelete(id);
  }
}
