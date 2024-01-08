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
    const token = this.jwtService.sign({
      id: req.user.id,
      email: req.user.email,
      role:req.user.role,
    });
    //* saved token in the data base
    await this.authService.updateToken(token, req.user.id);
    return {
      token: token,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async userProfile(@Request() req) {
    // return 'user login profile';
    return req.user;
  }

  // * need guard for know that who is user  logout
  @UseGuards(JwtAuthGuard)
  //* logout - logout can be Post method and Get method
  @Post('/logout')
  async logout(@Request() req) {
//* update token again for logout */
 const user = await this.authService.removeToken(req.user.id)
 return {Messeage:`this user ${req.user.email} is logout`}
  }
}
