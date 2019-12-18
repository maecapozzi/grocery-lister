import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany
} from "typeorm";
import { User } from "./User";
import { Item } from "./Item";

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @ManyToOne(
    type => User,
    user => user.id
  )
  user: User[];

  @ManyToMany(
    type => Item,
    item => item.id
  )
  item: Item[];
}
