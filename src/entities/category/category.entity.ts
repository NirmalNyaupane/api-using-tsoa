import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import CommonEnitity from "..";
import { RestaurantEnitity } from "../restaurant/restaurant.entity";
import { ProductEntity } from "../product/product.entity";

@Entity("Category")
export class CategoryEntity extends CommonEnitity{

    @Column({name:"name", nullable:false})
    readonly name:string;

    @Column({name:"description", type:"text", nullable:false})
    readonly description:string;

    @ManyToOne(()=>RestaurantEnitity, (res)=>res.categories,{cascade:true})
    restaurant:RestaurantEnitity

    @OneToMany(()=>ProductEntity, (product)=>product.category)
    products:ProductEntity
}
