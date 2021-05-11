import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import {Pessoa} from "../../entities/pessoa.entity";
import {ApiCreatedResponse, ApiOkResponse} from "@nestjs/swagger";

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  @ApiOkResponse({
    description: 'Ok'
  })
  create(@Body() pessoa: Pessoa) {
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
  update(@Param('id') id: string, @Body() pessoa: Pessoa) {
    return this.pessoaService.update(+id, pessoa);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaService.remove(+id);
  }
}
