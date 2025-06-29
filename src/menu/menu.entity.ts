import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Menu')
export class Menu {
  @PrimaryGeneratedColumn()
  menuno: number;

  @Column({ length: 512 })
  image: string;

  @Column()
  koname: string;

  @Column()
  enname: string;

  @Column()
  info: string;

  @Column()
  allergy: string;

  @Column()
  drinktype: string;
}
