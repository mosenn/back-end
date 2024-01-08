import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(data) {
    const hashPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prismaService.user.create({
      data: {
        ...data,
        password: hashPassword,
        role: Role.USER,
      },
      select: { name: true, id: true, email: true },
    });
    return user;
  }
}
