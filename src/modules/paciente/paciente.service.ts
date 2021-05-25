import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PacienteEntity } from 'src/entities/paciente.entity';

@Injectable()
export class PacienteService {
  async create(consulta: PacienteEntity) {
    try {
      return await PacienteEntity.save(consulta);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return await PacienteEntity.find();
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      return await PacienteEntity.findOne(id);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, paciente: PacienteEntity) {
    try {
      return await PacienteEntity.update(id, paciente);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      return await PacienteEntity.delete(id);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
