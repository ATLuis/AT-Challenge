import "reflect-metadata";
import { Entity, BaseEntity, PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string; 

  @Column()
  password!: string; 

  @Column({ nullable: true })
  email?: string; 

  @Column({ default: false })
  active!: boolean; 

  @CreateDateColumn()
  createdAt!: Date; 

  @UpdateDateColumn()
  updatedAt!: Date; 

}
