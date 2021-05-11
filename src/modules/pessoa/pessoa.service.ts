import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Pessoa} from "../../entities/pessoa.entity";

@Injectable()
export class PessoaService {

    async create(pessoa: Pessoa) {
        try {
            return await Pessoa.save(pessoa);
        } catch (err) {
            throw new HttpException('Error creating article', HttpStatus.BAD_REQUEST);
        }
    }

    async findAll() {
        try {
            return await Pessoa.find();
        } catch (err) {
            throw new HttpException('Error creating article', HttpStatus.BAD_REQUEST);
        }
    }

    async findOne(id: number) {
        try {
            return await Pessoa.findOne(id);
        } catch (err) {
            throw new HttpException('Error creating article', HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: number, pessoa: Pessoa) {
        try {
            return await Pessoa.update(id , pessoa);
        } catch (err) {
            throw new HttpException('Error creating article', HttpStatus.BAD_REQUEST);
        }
    }

    async remove(id: number) {
        try {
            return await Pessoa.delete(id);
        } catch (err) {
            throw new HttpException('Error creating article', HttpStatus.BAD_REQUEST);
        }
    }
}
