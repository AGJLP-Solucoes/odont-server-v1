import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PronturarioEntity } from 'src/entities/pronturario.entity';

@Injectable()
export class ProntuarioService {
  async create(prontuario: PronturarioEntity) {
    try {
      return await PronturarioEntity.save(prontuario);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return await PronturarioEntity.find();
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      return await PronturarioEntity.findOne(id);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, prontuario: PronturarioEntity) {
    try {
      return await PronturarioEntity.update(id, prontuario);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      return await PronturarioEntity.delete(id);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
