import { Injectable, NotFoundException } from '@nestjs/common';
import { createDto } from './dto/createuser.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from '@prisma/client';
import { updateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(body: createDto) {
    const createUser = await this.prismaService.user.create({
      data: { ...body, role: Role.USER },
    });
    console.log(createUser);
    return { message: 'user is created', createUser };
  }

  async users() {
    const users = await this.prismaService.user.findMany();
    return { message: 'all user is here', users };
  }

  async user(id: string) {
    const user = await this.prismaService.user.findUnique({ where: { id } });
    if (!user) {
      const NotFoundUser = new NotFoundException(
        'this user is not exist in data base',
      );
      //   if wanna return full object just return new NotFoundException
      return NotFoundUser.message;
    }
    return { message: 'user with Id', user };
  }

  //   for update use @Requset body  req.body because now role is update , role is not be update with @Body()

  async update(body: updateUserDto, id: string) {
    const user = await this.prismaService.user.update({
      where: { id },
      data: { name: body.name, email: body.email, role: body.role },
    });

    return { message: 'user is updated', user };
  }

  async Userdeleted(id: string) {
    const user = await this.prismaService.user.delete({ where: { id } });
    return { message: 'user is deleted', user };
  }
}
