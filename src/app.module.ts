import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [NoteModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
