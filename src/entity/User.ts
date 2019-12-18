import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { List } from "./List"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(
    type => List,
    list => list.id
  )
  list: List[];
}
