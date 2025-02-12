import { Controller, Get } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
import { NoteService } from './note.service';
import { Note } from './interfaces/note.interface';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return this.catsService.create(createCatDto);
  // }

  @Get()
  async findAll(): Promise<Note[]> {
    return this.noteService.findAll() as Promise<Note[]>;
  }
}
