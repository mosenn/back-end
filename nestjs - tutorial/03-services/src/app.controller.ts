import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
  HttpCode,
} from "@nestjs/common";

import { AppService } from "./app.service";
@Controller("report/:type")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getRequsetWithParam(@Param("type") type: string) {
    return this.appService.getRequsetWithParam(type);
  }
  @Get(":id")
  getRequsetWithParamWithID(
    @Param("type") type: string,
    @Param("id")
    id: string,
  ) {
    return this.appService.getRequsetWithParamAndId(type, id);
  }
  @Post("add-report")
  createReport(
    @Param("type") type: string,
    @Body() { amount, source }: { amount: number; source: string },
  ) {
    return this.appService.createNewReport(type, { amount, source });
  }
  @Put(":id")
  updateReport(
    @Body() body: { source: string; amount: number },
    @Param("type") type: string,
    @Param("id") id: string,
  ) {
    return this.appService.updateReport(type, id, body);
  }
  @HttpCode(204)
  @Delete(":id")
  deleteReport(@Param("id") id: string) {
    return this.appService.deleteReport(id);
  }
}
