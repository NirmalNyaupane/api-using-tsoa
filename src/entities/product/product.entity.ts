import { Column, Entity, ManyToOne } from "typeorm";
import CommonEnitity from "..";
import { CategoryEntity } from "../category/category.entity";

@Entity("Product")
export class ProductEntity extends CommonEnitity{
    @Column({name:"name", nullable:false})
    readonly name:string

    @Column({name:"description", type:"text", nullable:false})
    readonly description:string;

    @Column({name:"price", type:"money", nullable:false})
    readonly price:number

    @Column({name:"stock", nullable:false, type:"int"})
    readonly stock:number

    @ManyToOne(()=>CategoryEntity, (category)=>category.products)
    category:CategoryEntity
}