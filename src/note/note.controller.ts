import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateNoteDTO } from './dto/create-note.dto';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  create(@Body() createNoteDTO: CreateNoteDTO) {
    return this.noteService.create(createNoteDTO);
  }

  @Get()
  async findAll() {
    return this.noteService.findAll();
  }

  @Get(':id')
  async findWithUser(@Param('id') id: string) {
    return this.noteService.findWithUser(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(id);
  }
}
