import { Test, TestingModule } from '@nestjs/testing';
import { ProcedimentosService } from './procedimentos.service';

describe('ProcedimentosService', () => {
  let service: ProcedimentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcedimentosService],
    }).compile();

    service = module.get<ProcedimentosService>(ProcedimentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
