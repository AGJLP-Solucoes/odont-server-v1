import { Module } from '@nestjs/common';
import { PessoasModule } from './pessoas/pessoas.module';
import { ProcedimentosModule } from './procedimentos/procedimentos.module';

@Module({
  imports: [PessoasModule, ProcedimentosModule],
  providers: [],
})
export class ModulesModule {}
