import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity()
export class PessoasEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column()
  email: string;

  @Column()
  celular: number;

  @Column({ default: true })
  ativo: boolean;
}
