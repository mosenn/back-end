import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe,
} from "@nestjs/common";
import { ReportType } from "./data";
import { AppService } from "./app.service";
import { dtoCreateReport, dtoUpdateReport } from "./report.dtos";
@Controller("report/:type")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getRequsetWithParam(
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
  ) {
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
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Body() { amount, source }: dtoCreateReport,
  ) {
    return this.appService.createNewReport(type, { amount, source });
  }
  @Put(":id")
  updateReport(
    @Body() body: dtoUpdateReport,
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Param("id", ParseUUIDPipe) id: string,
  ) {
    return this.appService.updateReport(type, id, body);
  }
  @HttpCode(204)
  @Delete(":id")
  deleteReport(@Param("id") id: string) {
    return this.appService.deleteReport(id);
  }
}
