import { Injectable, NotFoundException } from "@nestjs/common";
import { ReportType, data } from "src/data";
import { v4 as uuid } from "uuid";
import { ReportResponseDto } from "../report.dtos";

interface newReport {
  amount: number;
  source: string;
}

interface updateReport {
  amount?: number;
  source?: string;
}

@Injectable()
export class ReportService {
  getRequsetWithParam(type: string): ReportResponseDto[] {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => {
      return report.type === reportType;
    });
  }
  // Get("paramas/:id")
  getRequsetWithParamAndId(type: string, id: string): ReportResponseDto {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    const report = data.report
      .filter((report) => {
        return report.type == reportType;
      })
      .find((report) => report.id === id);
    return new ReportResponseDto(report);
  }
  // post method
  createNewReport(
    type: string,
    { amount, source }: newReport,
  ): ReportResponseDto {
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
    // return {
    //   id: newReport.id,
    //   source: newReport.source,
    //   amount: newReport.amount,
    //   createAt: newReport.created_at,
    //   type: newReport.type,
    // };
    return new ReportResponseDto(newReport);
  }

  // put(/params/:id)
  updateReport(
    type: string,
    id: string,
    body: updateReport,
  ): ReportResponseDto {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    console.log(body);
    const updatedReport = data.report.map((report) => {
      if (report.id === id && report.type === reportType) {
        return { ...report, ...body, updated_at: new Date() };
      }
      return report;
    });

    data.report = updatedReport;
    const reportUptodate = updatedReport.find((report) => report.id === id);
    return new ReportResponseDto(reportUptodate);
  }

  // delete(:id)
  deleteReport(id: string) {
    const reportToDelete = data.report.find((report) => report.id === id);

    if (!reportToDelete) {
      throw new NotFoundException(`Report with ID ${id}  not found.`);
    }

    data.report = data.report.filter((report) => report.id !== id);
    // notghin return in post man just get status code 204
    return { deletedReport: reportToDelete };
  }
}
