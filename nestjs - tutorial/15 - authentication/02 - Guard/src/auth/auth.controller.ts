import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { authUser } from './dto/createUser.dto';
import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';

@UseGuards(AuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  createUser(@Body() body: authUser) {
    return this.authService.createUser(body);
  }
  @UseGuards(AuthGuard)
  @Get('/users')
  users() {
    return this.authService.users();
  }
}
