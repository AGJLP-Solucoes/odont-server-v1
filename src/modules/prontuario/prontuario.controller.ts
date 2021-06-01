import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PronturarioEntity } from 'src/entities/pronturario.entity';
import { ProntuarioService } from './prontuario.service';

@Controller('prontuario')
export class ProntuarioController {
  constructor(private readonly prontuarioService: ProntuarioService) { }

  @Post()
  create(@Body() createProntuario: PronturarioEntity) {
    return this.prontuarioService.create(createProntuario);
  }

  @Get()
  findAll() {
    return this.prontuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prontuarioService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProntuario: PronturarioEntity) {
    return this.prontuarioService.update(+id, updateProntuario);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prontuarioService.remove(+id);
  }
}
