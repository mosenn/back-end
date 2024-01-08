import { Injectable } from "@nestjs/common";
import { ReportService } from "src/report/report.service";

@Injectable()
export class SummeryService {
  summery() {
    return "all summery here";
  }
}
