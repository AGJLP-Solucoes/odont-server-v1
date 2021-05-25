import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProcedimentosService } from './procedimentos.service';
import { ProcedimentoEntity } from '../../entities/procedimento.entity';

@Controller('procedimentos')
export class ProcedimentosController {
  constructor(private readonly procedimentosService: ProcedimentosService) { }

  @Post()
  create(@Body() procedimento: ProcedimentoEntity) {
    return this.procedimentosService.create(procedimento);
  }

  @Get()
  findAll() {
    return this.procedimentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procedimentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() procedimento: ProcedimentoEntity) {
    return this.procedimentosService.update(+id, procedimento);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.procedimentosService.remove(+id);
  }
}
