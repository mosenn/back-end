import { Test, TestingModule } from "@nestjs/testing";
import { SummeryService } from "./summery.service";

describe("SummeryService", () => {
  let service: SummeryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummeryService],
    }).compile();

    service = module.get<SummeryService>(SummeryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
