import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateNoteDTO } from './dto/create-note.dto';
import { NoteService } from './note.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateNoteDTO } from './dto/update-note.dto';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createNoteDTO: CreateNoteDTO) {
    return this.noteService.create(createNoteDTO);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.noteService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findWithUser(@Param('id') id: string) {
    return this.noteService.findWithUser(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateNote(
    @Param('id') id: string,
    @Body() updateNoteDTO: UpdateNoteDTO,
  ) {
    return await this.noteService.updateNote(id, updateNoteDTO);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(id);
  }
}
