import {
  IsNumber,
  IsPositive,
  IsNotEmpty,
  IsString,
  IsOptional,
} from "class-validator";
export class dtoCreateReport {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}

export class dtoUpdateReport {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}
