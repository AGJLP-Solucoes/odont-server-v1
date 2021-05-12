import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {PessoasEntity} from "../../entities/pessoas.entity";

@Injectable()
export class PessoasService {

    async create(pessoa: PessoasEntity) {
        try {
            return await PessoasEntity.save(pessoa);
        } catch (err) {
            throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async findAll() {
        try {
            return await PessoasEntity.find();
        } catch (err) {
            throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async findOne(id: number) {
        try {
            return await PessoasEntity.findOne(id);
        } catch (err) {
            throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(id: number, pessoa: PessoasEntity) {
        try {
            return await PessoasEntity.update(id, pessoa);
        } catch (err) {
            throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async remove(id: number) {
        try {
            return await PessoasEntity.delete(id);
        } catch (err) {
            throw new HttpException('Error creating article', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
