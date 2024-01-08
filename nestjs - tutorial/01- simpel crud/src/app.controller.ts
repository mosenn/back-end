import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller("users")
export class AppController {
  @Get()
  findUsers() {
    return ["all user is here"];
  }
  @Get(":id")
  takeSingleUser() {
    return { message: "single user" };
  }
  @Post("create")
  createUser() {
    return { message: "create user" };
  }
  @Put(":id")
  updateUser() {
    return { message: "update user" };
  }

  @Delete(":id")
  deleteUser() {
    return { message: "user is deleted" };
  }
}
