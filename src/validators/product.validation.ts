import { IsInt, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class ProductValidation{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    description:string;

    @IsNotEmpty()
    @IsNumber()
    price:string;

    @IsNotEmpty()
    @IsInt()
    stock:string;

    @IsNotEmpty()
    @IsUUID()
    category_id:string;
}
