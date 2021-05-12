import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CondicaoEntity } from 'src/entities/condicao.entity';

@Injectable()
export class CondicoesService {
  async create(condicao: CondicaoEntity) {
    try {
      return await CondicaoEntity.save(condicao);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAll() {
    return `This action returns all condicoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} condicoe`;
  }

  async update(id: number, condicao: CondicaoEntity) {
    try {
      return await CondicaoEntity.update(id, condicao);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      return await CondicaoEntity.delete(id);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
