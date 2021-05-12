import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { PessoasEntity } from "../../entities/pessoa.entity";

@Controller('pessoa')
export class PessoasController {
  constructor(private readonly pessoaService: PessoasService) { }

  @Post()
  create(@Body() pessoa: PessoasEntity) {
    return this.pessoaService.create(pessoa);
  }

  @Get()
  findAll() {
    return this.pessoaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() pessoa: PessoasEntity) {
    return this.pessoaService.update(+id, pessoa);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaService.remove(+id);
  }
}
