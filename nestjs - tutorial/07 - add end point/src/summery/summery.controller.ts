import { Controller, Get } from "@nestjs/common";
import { SummeryService } from "./summery.service";

@Controller("summery")
export class SummeryController {
  constructor(private readonly sumService: SummeryService) {}
  @Get()
  summerys() {
    return this.sumService.summery();
  }
}
