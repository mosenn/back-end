import { Prisma, UserRole } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';
import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

type userType = {
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
};

type loginUserType = {
  email: string;
  password: string;
};
@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async singup({ email, password, confirmPassword, role }: userType) {
    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);
    const hashConfirmPassword = await bcrypt.hash(confirmPassword, salt);
    // or password !== confirmPassword
    if (password !== confirmPassword) {
      throw new NotAcceptableException('both password must be same');
    }

    const user = await this.prismaService.user.create({
      data: {
        email,
        password: hashPassword,
        confirmPassword: hashConfirmPassword,
        role: UserRole.USER,
      } as Prisma.UserUncheckedCreateInput,
    });
    // console.log({ user });
    return { message: 'user is created', data: user };
  }

  async login({ email, password }, req, res) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: { email, password },
      });

      if (!user) {
        throw new NotAcceptableException('email or password is wrong');
      }

      const token = jwt.sign(
        { email: user.email, userId: user.id, role: user.role },
        'secret',
      );
      console.log(token);
      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });

      // console.log('cookie', token);

      return res.status(200).json({ message: 'user is login', data: user });
    } catch (err) {
      return res
        .status(404)
        .json({ message: 'error user cant be login', data: err });
    }
  }

  UserIsLogin(req) {
    try {
      // Access cookies from the request object
      const token = req.cookies['token'];
      // Now you can use the 'token' in your logic

      if (token) {
        const user = jwt.verify(token, 'secret');
        console.log('this user is login', user);
        return { message: 'This user Is login', data: user };
      }
    } catch (err) {
      console.log(err);
    }
  }

  logout(req, res) {
    try {
      const token = req.cookies.token;
      //* verify Is optional , i want get information who user is logout
      const user = jwt.verify(token, 'secret');
      // console.log('cookies in logout', user);
      //* here clear cookie
      res.clearCookie('token');
      //* send message and information  user who is logged out
      return res
        .status(200)
        .json({ message: 'User is logged out', data: user });
    } catch (err) {
      return res.status(500).json({ error: 'An error occurred' });
    }
  }
}
