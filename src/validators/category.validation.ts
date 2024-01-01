import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateCategory {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsUUID()
  product_id: string;
}

export class UpdateCategory {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsUUID()
  product_id: string;
}
