import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateNoteDTO } from './dto/create-note.dto';
import { NoteService } from './note.service';
import { AuthGuard } from 'src/auth/auth.guard';

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
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(id);
  }
}
