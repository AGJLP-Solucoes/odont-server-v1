import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, } from 'typeorm';
import { PessoasEntity } from "./pessoa.entity";

@Entity()
export class PacienteEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: '3' })
    tipoSanguineo: string;

    @OneToOne((type) => PessoasEntity, { eager: true })
    @JoinColumn()
    pessoa: PessoasEntity;
}
