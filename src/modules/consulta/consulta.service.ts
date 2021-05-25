import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConsultaEntity } from 'src/entities/consulta.entity';

@Injectable()
export class ConsultaService {
  async create(consulta: ConsultaEntity) {
    try {
      return await ConsultaEntity.save(consulta);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return await ConsultaEntity.find();
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      return await ConsultaEntity.findOne(id);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, consulta: ConsultaEntity) {
    try {
      return await ConsultaEntity.update(id, consulta);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      return await ConsultaEntity.delete(id);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
