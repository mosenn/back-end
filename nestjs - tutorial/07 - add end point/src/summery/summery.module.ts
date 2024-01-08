import { Module } from "@nestjs/common";
import { SummeryController } from "./summery.controller";
import { SummeryService } from "./summery.service";
import { ReportModule } from "src/report/report.module";
@Module({
  providers: [SummeryService],
  controllers: [SummeryController],
})
export class SummeryModule {}
