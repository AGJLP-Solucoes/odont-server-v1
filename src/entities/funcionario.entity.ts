import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { PessoasEntity } from '../entities/pessoa.entity';

@Entity()
export class FuncionarioEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: false })
    atende: boolean;

    @Column({ default: false })
    ortodentista: boolean;

    @Column()
    numeroCRO: number;

    @OneToOne((type) => PessoasEntity, { eager: true })
    @JoinColumn()
    pessoa: PessoasEntity;
}
