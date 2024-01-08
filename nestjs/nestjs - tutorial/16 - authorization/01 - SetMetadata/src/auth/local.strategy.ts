import { AuthService } from './auth.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  //*
  constructor(private authService: AuthService) {
    //* super take  Strategy config
    super({
      usernameField: 'email',
    });
  }
  //*
  async validate(email: string, password: string) {
    console.log('VALIDATE', email, password);
    const user = await this.authService.validateUser(email, password);

    return user;
  }
}
