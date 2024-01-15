import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Version('1')
  @Get('/users')
  users() {
    return 'all user';
  }
  @Version('2')
  @Get('/users')
  usersv2() {
    return 'all user 2';
  }
}
