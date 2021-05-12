import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemEntity } from 'src/entities/item.entity';
import { ItensService } from './itens.service';

@Controller('itens')
export class ItensController {
  constructor(private readonly itensService: ItensService) { }

  @Post()
  create(@Body() createIten: ItemEntity) {
    return this.itensService.create(createIten);
  }

  @Get()
  findAll() {
    return this.itensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIten: ItemEntity) {
    return this.itensService.update(+id, updateIten);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itensService.remove(+id);
  }
}
