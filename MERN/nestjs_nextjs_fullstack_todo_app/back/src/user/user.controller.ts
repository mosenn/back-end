import {
  Body,
  Controller,
  Post,
  Get,
  Response,
  Request,
  Req,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/login')
  singin(@Body() body: LoginUserDto, @Request() req, @Response() res) {
    return this.userService.login(body, req, res);
    // return "user is here"
  }
  @Post('/register')
  singup(@Body() body: CreateUserDto) {
    return this.userService.singup(body);
  }

  // use for  get infromation who is user  is login
  @Get('/userislogin')
  UserIsLogin(@Request() req) {
    return this.userService.UserIsLogin(req);
  }
  @Get('/logout')
  logout(@Req() req, @Res() res) {
    return this.userService.logout(req, res);
  }
}
