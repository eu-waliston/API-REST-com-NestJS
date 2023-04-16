import { IsString, MinLength, IsNotEmpty, MaxLength } from 'class-validator';

export class AuthorDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  private readonly name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  private readonly surname: string;
}
