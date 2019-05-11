import { Entity, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Card } from "../card/card.entity";

@Entity()
export class User {
  @PrimaryColumn({ unique: true })
  id: string

  @OneToOne(type => Card, card => card.userId)
  @JoinColumn()
  card: Card

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string
}