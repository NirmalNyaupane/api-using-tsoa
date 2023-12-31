import { BeforeInsert, Column, Entity, OneToMany } from "typeorm";
import CommonEnitity from "..";
import { RestaurantType } from "../../constants";
import { CategoryEntity } from "../category/category.entity";
import bcrypt from "bcryptjs";
@Entity("Restaurant")
export class RestaurantEnitity extends CommonEnitity {
  @Column({ name: "name", nullable: false })
  name: string;

  @Column({ name: "email", nullable: false, unique: true })
  email: string;

  @Column({ name: "type", nullable: false, type: "enum", enum: RestaurantType })
  type: RestaurantType;

  @Column({ name: "address", nullable: false })
  address: string;

  @BeforeInsert()
  hashPassword() {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash("Nir", salt, (err, hash) => {
        this.password = hash;
      });
    });
  }

  @Column({ name: "password", nullable: false, select:false})
  password: string;

  @OneToMany(() => CategoryEntity, (category) => category.restaurant)
  categories: CategoryEntity[];
}
