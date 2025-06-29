import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Game')
export class Game {
  @PrimaryGeneratedColumn()
  gameno: number;

  @Column({ length: 512 })
  image: string;

  @Column()
  koname: string;

  @Column()
  enname: string;

  @Column()
  info1: string;

  @Column()
  info2: string;

  @Column()
  level: string;

  @Column()
  player: string;

  @Column()
  time: string;

  @Column()
  age: string;

  @Column()
  category: string;
}
