import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
  HttpCode,
  NotFoundException,
} from "@nestjs/common";
import { data, ReportType } from "./data";
import { v4 as uuid } from "uuid";
@Controller("report/:type")
export class AppController {


  @Get()
  getRequsetWithParam(@Param("type") type: string) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    return data.report.filter((report) => {
      return report.type == reportType;
    });
  }

  @Get(":id")
  getRequsetWithParamWithID(
    @Param("type") type: string,
    @Param("id")
    id: string,
  ) {
    console.log("type", type);
    console.log("id", id);

    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    return data.report
      .filter((report) => {
        return report.type == reportType;
      })
      .find((report) => report.id === id);
  }
  @Post("add-report")
  createReport(
    @Param("type") type: string,
    @Body() { amount, source }: { amount: number; source: string },
  ) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: reportType,
    };
    data.report.push(newReport);
    return newReport;
  }
  @Put(":id")
  updateReport(
    @Body() body: { source: string; amount: number },
    @Param("type") type: string,
    @Param("id") id: string,
  ) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    const updatedReport = data.report.map((report) => {
      if (report.id === id && report.type === reportType) {
        return { ...report, ...body };
      }
      return report;
    });

    data.report = updatedReport;
    return updatedReport.find((report) => report.id === id);
  }
  @HttpCode(204)
  @Delete(":id")
  deleteReport(@Param("id") id: string) {
    const reportToDelete = data.report.find((report) => report.id === id);

    if (!reportToDelete) {
      throw new NotFoundException(`Report with ID ${id}  not found.`);
    }

    data.report = data.report.filter((report) => report.id !== id);

    return { deletedReport: reportToDelete };
  }
}
