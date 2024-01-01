import { Column, Entity, ManyToOne } from "typeorm";
import CommonEnitity from "..";
import { CategoryEntity } from "../category/category.entity";

@Entity("Product")
export class ProductEntity extends CommonEnitity {
  @Column({ name: "name", nullable: false })
  name: string;

  @Column({ name: "description", type: "text", nullable: false })
  description: string;

  @Column({ name: "price", type: "money", nullable: false })
  price: number;

  @Column({ name: "stock", nullable: false, type: "int" })
  stock: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products, {onDelete:"CASCADE"})
  category: CategoryEntity;
}
