import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Place')
export class Place {
  @PrimaryGeneratedColumn()
  placeno: number;

  @Column()
  name: string;

  @Column({ length: 512 })
  image: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  time: string;

  @Column()
  service: string;
}
