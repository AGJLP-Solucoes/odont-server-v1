import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CondicaoEntity } from 'src/entities/condicao.entity';
import { CondicoesService } from './condicoes.service';

@Controller('condicoes')
export class CondicoesController {
  constructor(private readonly condicoesService: CondicoesService) { }

  @Post()
  create(@Body() createCondicoe: CondicaoEntity) {
    return this.condicoesService.create(createCondicoe);
  }

  @Get()
  findAll() {
    return this.condicoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.condicoesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCondicoe: CondicaoEntity) {
    return this.condicoesService.update(+id, updateCondicoe);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.condicoesService.remove(+id);
  }
}
