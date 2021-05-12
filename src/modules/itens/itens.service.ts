import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ItemEntity } from 'src/entities/item.entity';

@Injectable()
export class ItensService {
  async create(item: ItemEntity) {
    try {
      return await ItemEntity.save(item);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAll() {
    return `This action returns all itens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iten`;
  }

  async update(id: number, item: ItemEntity) {
    try {
      return await ItemEntity.update(id, item);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      return await ItemEntity.delete(id);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
