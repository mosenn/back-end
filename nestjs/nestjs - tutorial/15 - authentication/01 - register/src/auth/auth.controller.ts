import { AuthService } from './auth.service';
import { authUser } from './dto/createUser.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  createUser(@Body() body: authUser) {
    return this.authService.createUser(body);
  }
}
