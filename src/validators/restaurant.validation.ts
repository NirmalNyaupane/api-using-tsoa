import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
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
