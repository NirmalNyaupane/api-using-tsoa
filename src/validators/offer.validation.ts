import {
    IsArray,
    IsISO8601,
    IsNotEmpty,
    IsNumber,
    IsUUID,
    ValidateNested,
    
} from "class-validator";

export class CreateOfferValidation {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  @IsNumber()
  percentage: number;

  @IsNotEmpty()
  @IsISO8601()
  startingDate: string;


  @IsNotEmpty()
  @IsISO8601()
  endingDate: string;

  @IsArray()
  products_ids: string[];
}
