import { Module } from '@nestjs/common';
import { ProcedimentosController } from './procedimentos.controller';
import {ProcedimentosService} from "./procedimentos.service";

@Module({
  controllers: [ProcedimentosController],
  providers: [ProcedimentosService]
})
export class ProcedimentosModule {}
