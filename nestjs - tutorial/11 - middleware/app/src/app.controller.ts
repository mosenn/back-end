import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  users(): string {
    return this.appService.users();
  }
  @Get('/:id')
  user(@Param('id') id: string) {
    return this.appService.user(id);
  }
  @Post()
  create(): string {
    return this.appService.create();
  }
}
