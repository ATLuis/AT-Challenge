import "reflect-metadata";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  // add more fields here
  @Column()
  username!: string;
  @Column()
  password!: string;
  @Column()
  status!: string;
}
