import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ConsultaEntity } from 'src/entities/consulta.entity';
import { ConsultaService } from './consulta.service';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) { }

  @Post()
  create(@Body() createConsulta: ConsultaEntity) {
    return this.consultaService.create(createConsulta);
  }

  @Get()
  findAll() {
    return this.consultaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateConsulta: ConsultaEntity) {
    return this.consultaService.update(+id, updateConsulta);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultaService.remove(+id);
  }
}
