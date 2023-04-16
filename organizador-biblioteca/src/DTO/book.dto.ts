import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class BookDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  private readonly name: string;

  private readonly author: string[];
  private readonly language: string;
  private readonly releaseYear: number;
  private readonly publisher: string;
  private readonly pages: number;
}
