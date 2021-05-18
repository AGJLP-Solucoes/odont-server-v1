import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CondicaoEntity } from "./condicao.entity";
import { PessoasEntity } from "./pessoa.entity";

@Entity()
export class PronturarioEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne((type) => PessoasEntity, { eager: true })
    @JoinColumn()
    pessoa: PessoasEntity;

    @ManyToMany((type) => CondicaoEntity, { eager: true })
    @JoinTable()
    condicoes: CondicaoEntity[];
}
