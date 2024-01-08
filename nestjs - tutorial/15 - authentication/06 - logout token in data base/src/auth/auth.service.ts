import { AuthGuard } from '@nestjs/passport';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async users() {
    const users = await this.prismaService.user.findMany();
    return users;
  }
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
  //* run in local.strategy.ts
  async validateUser(email: string, password: string) {
    console.log('email in validaeUser', email);
    const user = await this.prismaService.user.findUnique({ where: { email } });
    console.log('user in validateUser', user);
    if (!user) {
      throw new BadRequestException();

      // return 'user is not exist try another user';
    }

    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      throw new UnauthorizedException();
      // return ' password or username is worng';
    }
    return user;
  }
  //* saved toke in the data base
  async updateToken(token: string, id: string) {
    const userToken = await this.prismaService.user.update({
      where: { id },
      data: { token },
    });
    // return userToken;
    return token;
  }
  // * check user is exist and have token or not !
  async validateUserByToken(id:string) {
    const user = await this.prismaService.user.findUnique({ where: {id}});
    if (!user || user.token === null) {
      throw new UnauthorizedException();
    }
    return user;
  }
  // * logout user ( Remove token in the data base)
  async removeToken(id: string) {
    const user = await this.prismaService.user.update({
      where: { id },
      data: { token: null },
    });
    return { Message: `this ${user} come from removeTOken` };
  }
}
