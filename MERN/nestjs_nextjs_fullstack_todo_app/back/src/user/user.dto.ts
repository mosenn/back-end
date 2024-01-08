import { UserRole } from '@prisma/client';
export class CreateUserDto {
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}

export class LoginUserDto {
  email: string;
  password: string;
}
