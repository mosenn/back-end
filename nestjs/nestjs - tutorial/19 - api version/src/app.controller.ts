import { Controller, Get, VERSION_NEUTRAL, Version } from '@nestjs/common';
import { AppService } from './app.service';

//*-------- for controller
// @Controller({path:'user' , version:'1'})

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Version('1')
  @Get('/users')
  users() {
    return 'version-1';
  }
  @Version('2')
  @Get('/users')
  usersv2() {
    return 'version-2';
  }
  @Version(VERSION_NEUTRAL)
  @Get('/profile')
  user() {
    return 'user profile';
  }
  // *----------- for controller

  // @Get('/users')
  // users() {
  //   return 'version-1';
  // }
}
