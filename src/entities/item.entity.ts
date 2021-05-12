import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column("decimal", { precision: 5, scale: 2 })
  valor: number;

  @Column()
  saldo: number;

  @Column({ default: true })
  ativo: boolean;
}
