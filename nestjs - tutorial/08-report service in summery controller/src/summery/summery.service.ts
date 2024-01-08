import { Injectable } from "@nestjs/common";
import { ReportType } from "src/data";
import { ReportService } from "src/report/report.service";

@Injectable()
export class SummeryService {
  constructor(private readonly reportSv: ReportService) {}

  calculateSummary() {
    console.log(this.reportSv, "report service");
    const totalIncome = this.reportSv
      .getRequsetWithParam(ReportType.INCOME)
      .reduce((sum, report): any => {
        return sum + report.amount;
      }, 0);
    const totalExpense = this.reportSv
      .getRequsetWithParam(ReportType.EXPENSE)
      .reduce((sum, report): any => {
        return sum + report.amount;
      }, 0);
    console.log(totalIncome, totalExpense);
    return {
      totalIncome,
      totalExpense,
      netIncome: totalIncome - totalExpense,
    };
  }
}
