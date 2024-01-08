import { IsEmail, IsString } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @IsString()
  email: String;
  @IsString()
  password: String;
}
