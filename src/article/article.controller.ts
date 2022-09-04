import { ArticleService } from './article.service';
import { Controller, Post } from '@nestjs/common';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Post()
  async create() {
    return this.articleService.createArticle;
  }
}
