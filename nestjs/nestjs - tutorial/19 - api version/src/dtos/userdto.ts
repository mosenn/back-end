import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class Userdto {
  @IsString()
  @ApiProperty({ type: String, description: 'username' })
  username: string;
  @IsString()
  @IsEmail()
  @ApiProperty({ type: String, description: 'email' })
  email: string;
}
