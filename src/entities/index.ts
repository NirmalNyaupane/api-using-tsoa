import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

class CommonEnitity extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @CreateDateColumn({name:"created_at"})
    createdAt:string;

    @UpdateDateColumn({name:"updated_at"})
    updatedAt:string;

    @DeleteDateColumn({name:"deleted_at"})
    deletedAt:string
}

export default CommonEnitity;