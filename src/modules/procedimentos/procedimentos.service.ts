import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProcedimentoEntity } from '../../entities/procedimento.entity';

@Injectable()
export class ProcedimentosService {
    async create(processedimento: ProcedimentoEntity) {
        try {
            return await ProcedimentoEntity.create(processedimento);
        } catch (err) {
            throw new HttpException(
                'Error creating article',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async findAll() {
        try {
            return await ProcedimentoEntity.find();
        } catch (err) {
            throw new HttpException(
                'Error creating article',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async findOne(id: number) {
        try {
            return await ProcedimentoEntity.findOne(id);
        } catch (err) {
            throw new HttpException(
                'Error creating article',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async update(id: number, processedimento: ProcedimentoEntity) {
        try {
            return await ProcedimentoEntity.update(id, processedimento);
        } catch (err) {
            throw new HttpException(
                'Error creating article',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async remove(id: number) {
        try {
            return await ProcedimentoEntity.delete(id);
        } catch (err) {
            throw new HttpException(
                'Error creating article',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
