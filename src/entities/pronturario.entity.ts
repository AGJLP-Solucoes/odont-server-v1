import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Pessoa} from "./pessoa.entity";

@Entity()
export class PronturarioEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne((type) => Pessoa, {eager: true})
    @JoinColumn()
    pessoa: Pessoa;


}
