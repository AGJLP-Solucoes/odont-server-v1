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

  async findAll() {
    try {
      return await CondicaoEntity.find();
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      return await CondicaoEntity.findOne(id);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
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
