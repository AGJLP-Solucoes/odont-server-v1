import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FuncionarioEntity } from 'src/entities/funcionario.entity';

@Injectable()
export class FuncionarioService {
  async create(consulta: FuncionarioEntity) {
    try {
      return await FuncionarioEntity.save(consulta);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return await FuncionarioEntity.find();
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      return await FuncionarioEntity.findOne(id);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, paciente: FuncionarioEntity) {
    try {
      return await FuncionarioEntity.update(id, paciente);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      return await FuncionarioEntity.delete(id);
    } catch (err) {
      throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
