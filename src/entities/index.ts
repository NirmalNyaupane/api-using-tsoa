import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

class CommonEnitity extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    readonly id:string

    @CreateDateColumn({name:"created_at"})
    readonly createdAt:string;

    @UpdateDateColumn({name:"updated_at"})
    readonly updatedAt:string;

    @DeleteDateColumn({name:"deleted_at"})
    readonly deletedAt:string
}

export default CommonEnitity;