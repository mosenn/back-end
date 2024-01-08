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
import { ReportType } from "src/data";
import { ReportService } from "./report.service";
import {
  ReportResponseDto,
  dtoCreateReport,
  dtoUpdateReport,
} from "../report.dtos";

@Controller("report/:type")
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get()
  getRequsetWithParam(
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto[] {
    return this.reportService.getRequsetWithParam(type);
  }
  @Get(":id")
  getRequsetWithParamWithID(
    @Param("type") type: string,
    @Param("id")
    id: string,
  ): ReportResponseDto {
    return this.reportService.getRequsetWithParamAndId(type, id);
  }
  @Post("add-report")
  createReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Body() { amount, source }: dtoCreateReport,
  ): ReportResponseDto {
    return this.reportService.createNewReport(type, { amount, source });
  }
  @Put(":id")
  updateReport(
    @Body() body: dtoUpdateReport,
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Param("id", ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    return this.reportService.updateReport(type, id, body);
  }
  @HttpCode(204)
  @Delete(":id")
  deleteReport(@Param("id") id: string) {
    return this.reportService.deleteReport(id);
  }
}
