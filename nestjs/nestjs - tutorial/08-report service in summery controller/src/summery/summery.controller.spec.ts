import { Test, TestingModule } from '@nestjs/testing';
import { SummeryController } from './summery.controller';

describe('SummeryController', () => {
  let controller: SummeryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SummeryController],
    }).compile();

    controller = module.get<SummeryController>(SummeryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
