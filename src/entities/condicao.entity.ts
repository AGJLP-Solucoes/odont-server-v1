import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CondicaoEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ length: 250 })
  detalhes: string;

  @Column({ default: true })
  ativo: boolean;
}
