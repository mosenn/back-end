import { Controller, Get, Render, } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('users/index')
  users() {
    return {name:"mohsen" , work:'developer'}
  }


}
