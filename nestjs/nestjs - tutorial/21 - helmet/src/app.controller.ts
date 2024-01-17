import { Controller, Get, } from '@nestjs/common';
import { AppService } from './app.service';

//*-------- for controller
// @Controller({path:'user' , version:'1'})

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  users() {
    return 'all user here';
  }

  @Get('/profile')
  user() {
    return 'user profile';
  }

}
