import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {PessoasEntity} from "./pessoas.entity";

@Entity()
export class PronturarioEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne((type) => PessoasEntity, {eager: true})
    @JoinColumn()
    pessoa: PessoasEntity;


}
