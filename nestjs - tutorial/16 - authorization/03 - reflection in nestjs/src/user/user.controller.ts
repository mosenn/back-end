import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Request,
  Delete,

  // eslint-disable-next-line prettier/prettier
  SetMetadata,
  UseGuards
} from '@nestjs/common';
// import { userTransfrom } from './interceptor/transform.interceptor';
import { createDto } from './dto/createuser.dto';
import { UserService } from './user.service';
import { Roles } from './decorators/role.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleGuard } from './guards/role.guard';
// @UseInterceptors(userTransfrom)
// @Roles("ROLE USER CONTROLLER" )
@Roles("ADMIN" )
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  create(@Body() body: createDto) {
    return this.userService.create(body);
  }
  // @SetMetadata('roles' ,['ADMIN'])
  //* add jwtAuath Guard and role guard for guard setmetada authrozation
  @UseGuards(JwtAuthGuard , RoleGuard)
  @Roles("ADMIN" )
  @Get()
  users() {
    return this.userService.users();
  }
  // @UseInterceptors(userTransfrom)
  @Get('/:id')
  user(@Param('id') id:string) {
    return this.userService.user(id);
  }

  //   for update use @Requset body  req.body because now role is update , role is not be update with @Body()
  @Put('update/:id')
  update(@Param('id') id: string, @Request() req) {
    return this.userService.update(req.body, id);
  }

  @Delete('delete/:id')
  Userdeleted(@Param('id') id: string) {
    return this.userService.Userdeleted(id);
  }
}
