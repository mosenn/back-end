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
  SetMetadata
} from '@nestjs/common';
// import { userTransfrom } from './interceptor/transform.interceptor';
import { createDto } from './dto/createuser.dto';
import { UserService } from './user.service';
import { Roles } from './decorators/role.decorator';
// @UseInterceptors(userTransfrom)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  create(@Body() body: createDto) {
    return this.userService.create(body);
  }
   
  // @SetMetadata('roles' ,['ADMIN'])
  @Roles("ADMIN" ,"USER" , "EDITOR" )
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
