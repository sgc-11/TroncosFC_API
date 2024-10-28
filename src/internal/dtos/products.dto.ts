import {
    IsString,
    IsNumber,
    IsUrl,
    IsNotEmpty,
    IsPositive,
  } from 'class-validator';
  import { PartialType } from '@nestjs/swagger'; //opcional de forma automatica con swagger para open docs
  import { ApiProperty } from '@nestjs/swagger';
  export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly description: string;
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly price: number;
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly stock: number;
    @IsUrl()
    @IsNotEmpty()
    @ApiProperty()
    readonly image: string;
  }
  
  export class UpdateProductDto extends PartialType(CreateProductDto) {}
  