import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import CommonEnitity from "..";
import { ProductEntity } from "../product/product.entity";

@Entity("offer")
export class Offer extends CommonEnitity {
  @Column({ nullable: false })
  code: string;

  @Column({ nullable: false, type:"float"})
  percentage: number;

  @Column({ name: "starting_date", nullable: false })
  startingDate: string;

  @Column({ name: "ending_date", nullable: false })
  endingDate: string;

  @ManyToMany(() => ProductEntity,{onDelete:"CASCADE"})
  @JoinTable()
  products: ProductEntity[];
}
