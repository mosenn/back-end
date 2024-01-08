import {
  IsNumber,
  IsPositive,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDate,
} from "class-validator";

import { ReportType } from "./data";
import { Exclude, Expose } from "class-transformer";
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

// new added
export class ReportResponseDto {
  id: string;
  source: string;
  amount: number;
  type: ReportType;
  // created_at: Date;
  @Exclude()
  updated_at: Date;

  @Expose({ name: "createdAt" })
  @IsDate()
  created_at: Date;

  constructor(parial: Partial<ReportResponseDto>) {
    Object.assign(this, parial);
  }
}
