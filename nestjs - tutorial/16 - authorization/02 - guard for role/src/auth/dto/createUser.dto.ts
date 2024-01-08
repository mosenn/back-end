import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { Role } from '@prisma/client';
export class authUser {
  role: Role;
  @IsString()
  @IsNotEmpty()
  name: String;
  @IsString()
  @IsNotEmpty()
  password: String;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: String;
}
