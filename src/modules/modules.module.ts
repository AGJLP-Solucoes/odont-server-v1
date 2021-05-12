import { Module } from '@nestjs/common';
import { CondicoesModule } from './condicoes/condicoes.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { ProcedimentosModule } from './procedimentos/procedimentos.module';
import { ItensModule } from './itens/itens.module';

@Module({
  imports: [PessoasModule, ProcedimentosModule, CondicoesModule, ItensModule],
  providers: [],
})
export class ModulesModule { }
