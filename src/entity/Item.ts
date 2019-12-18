import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { List } from "./List";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => List,
    list => list.id
  )
  list: List[];
}
