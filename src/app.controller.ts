import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getRunning(): string {
    return this.appService.getRunning();
  }
}
