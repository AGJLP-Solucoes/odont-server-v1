import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacienteEntity } from 'src/entities/paciente.entity';
import { PacienteService } from './paciente.service';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) { }

  @Post()
  create(@Body() createPaciente: PacienteEntity) {
    return this.pacienteService.create(createPaciente);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaciente: PacienteEntity) {
    return this.pacienteService.update(+id, updatePaciente);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacienteService.remove(+id);
  }
}
