import { Test, TestingModule } from '@nestjs/testing';
import { ProcedimentosController } from './procedimentos.controller';
import { ProcedimentosService } from './procedimentos.service';

describe('ProcedimentosController', () => {
  let controller: ProcedimentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcedimentosController],
      providers: [ProcedimentosService],
    }).compile();

    controller = module.get<ProcedimentosController>(ProcedimentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
