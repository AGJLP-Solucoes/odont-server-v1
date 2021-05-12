import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ProcedimentoEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  detalhe: string;

  @Column({ default: true })
  ativo: boolean;
}
