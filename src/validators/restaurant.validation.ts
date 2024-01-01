import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  Length,
} from "class-validator";
import { RestaurantType } from "../constants";

export class RestaurantValidation {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsEnum(RestaurantType)
  type: RestaurantType;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsStrongPassword()
  @Length(8)
  password: string;
}

export class UpdateRestaurantValidation {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(RestaurantType)
  type: RestaurantType;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  @IsStrongPassword()
  @Length(8)
  password: string;
}
