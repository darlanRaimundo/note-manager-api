import { CreateNoteDTO } from './dto/create-note.dto';
import { NoteService } from './note.service';
import { UpdateNoteDTO } from './dto/update-note.dto';
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    create(createNoteDTO: CreateNoteDTO): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/note.interface").Note> & import("./interfaces/note.interface").Note & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<import("./interfaces/note.interface").Note[]>;
    findWithUser(id: string): Promise<import("./interfaces/note.interface").Note[]>;
    updateNote(id: string, updateNoteDTO: UpdateNoteDTO): Promise<(import("mongoose").Document<unknown, {}, import("./interfaces/note.interface").Note> & import("./interfaces/note.interface").Note & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./interfaces/note.interface").Note> & import("./interfaces/note.interface").Note & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
