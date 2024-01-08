import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { Role } from '@prisma/client';
export class createDto {
  role: Role;
  @IsString()
  name: string;
  @IsString()
  @IsNotEmpty({ message: 'set  email' })
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty({ message: 'set  password' })
  password: string;
}
