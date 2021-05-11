import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {Pessoa} from './pessoa.entity';

@Entity()
export class PacienteEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: '3'})
    tipoSanguineo: string;

    @OneToOne((type) => Pessoa, {eager: true})
    @JoinColumn()
    pessoa: Pessoa;
}
