import { IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly deescription: string;

  @IsNotEmpty()
  readonly body: string;

  @IsNotEmpty()
  readonly tagList: string[];
}
