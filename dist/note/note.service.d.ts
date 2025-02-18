import { Model } from 'mongoose';
import { CreateNoteDTO } from './dto/create-note.dto';
import { Note } from './interfaces/note.interface';
import { UpdateNoteDTO } from './dto/update-note.dto';
export declare class NoteService {
    private noteModel;
    constructor(noteModel: Model<Note>);
    create(createNoteDTO: CreateNoteDTO): Promise<import("mongoose").Document<unknown, {}, Note> & Note & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<Note[]>;
    findWithUser(userId: string): Promise<Note[]>;
    updateNote(id: string, updateNoteDTO: UpdateNoteDTO): Promise<(import("mongoose").Document<unknown, {}, Note> & Note & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, Note> & Note & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
