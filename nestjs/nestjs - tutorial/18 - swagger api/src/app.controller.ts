import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Userdto } from './dtos/userdto';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @ApiResponse({ status: 202, description: 'create user' })
  // @ApiBody({type:Userdto})
  @Post('register')
  register(@Body() body: Userdto) {
    return { message: 'user is register', data: body };
  }
  @ApiOkResponse({description: 'login user' })
  @Post('login')
  login(@Body() body: Userdto) {
    console.log(body);
    return { message: 'user is login', data: body };
  }

  @Get('user/:id')
  user() {
    return 'single user';
  }
  @ApiBearerAuth()
  @Get('users')
  users() {
    return 'all users';
  }
}
