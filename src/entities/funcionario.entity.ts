import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {PessoasEntity} from './pessoas.entity';

@Entity()
export class FuncionarioEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: '3'})
    tipoSanguineo: string;

    @Column({default: false})
    atende: boolean;

    @Column({default: false})
    ortodentista: boolean;

    @Column()
    numeroCRO: number;

    @OneToOne((pessoa) => PessoasEntity)
    pessoa: PessoasEntity;
}
