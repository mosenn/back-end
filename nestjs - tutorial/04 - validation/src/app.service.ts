import { Injectable, NotFoundException } from "@nestjs/common";
import { ReportType, data } from "./data";
import { v4 as uuid } from "uuid";

interface newReport {
  amount: number;
  source: string;
}

interface updateReport {
  amount?: number;
  source?: string;
}

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello Worlds!';
  // }
  // Get ('params')
  getRequsetWithParam(type: string) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => {
      return report.type === reportType;
    });
  }
  // Get("paramas/:id")
  getRequsetWithParamAndId(type: string, id: string) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    return data.report
      .filter((report) => {
        return report.type == reportType;
      })
      .find((report) => report.id === id);
  }
  // post method
  createNewReport(type: string, { amount, source }: newReport) {
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

  // put(/params/:id)
  updateReport(type: string, id: string, body: updateReport) {
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
    return updatedReport.find((report) => report.id === id);
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
