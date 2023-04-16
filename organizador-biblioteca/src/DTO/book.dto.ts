import {
  ArrayMinSize,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { AuthorDTO } from './author.dto';
import { Type } from 'class-transformer';

export class BookDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  private readonly name: string;

  @IsNotEmpty()
  @Type(() => AuthorDTO)
  @ArrayMinSize(1)
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  private readonly author: AuthorDTO[];

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  private readonly language: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @MinLength(3)
  @MaxLength(100)
  private readonly releaseYear: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  private readonly publisher: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  private readonly pages: number;
}
