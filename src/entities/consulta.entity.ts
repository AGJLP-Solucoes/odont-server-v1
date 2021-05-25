import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { FuncionarioEntity } from "./funcionario.entity";
import { ItemEntity } from "./item.entity";
import { PacienteEntity } from "./paciente.entity";


@Entity()
export class ConsultaEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column()
  horario: string;

  @Column("decimal", { precision: 5, scale: 2 })
  valor: number;

  @Column({ default: false })
  efetuada: boolean;

  @ManyToMany((type) => FuncionarioEntity, { eager: true })
  @JoinTable()
  funcionarios: FuncionarioEntity[];

  @ManyToOne((type) => PacienteEntity, { eager: true })
  @JoinTable()
  paciente: PacienteEntity;

  @ManyToMany((type) => ItemEntity, { eager: true })
  @JoinTable()
  itens: ItemEntity[];
}
