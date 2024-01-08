import { AuthService } from './auth.service';
import { authUser } from './dto/createUser.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { LoginUserDto } from './dto/loginUser.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    public jwtService: JwtService,
  ) {}
  @Post('/register')
  createUser(@Body() body: authUser) {
    return this.authService.createUser(body);
  }
  @Get('/users')
  users() {
    return this.authService.users();
  }
  @Post('/login')
  // @UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  async login(@Body() body: LoginUserDto, @Request() req) {
    // console.log('req user controller', req.user);
    // console.log('BODY IN CONTROLLER', body);
    // return req.user;
    // return body;
    return {
      token: this.jwtService.sign({ id: req.user.id, email: req.user.email }),
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async userProfile(@Request() req) {
    // return 'user login profile';
    return req.user;
  }
}
