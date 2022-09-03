import { Controller, Post } from '@nestjs/common';

@Controller('articles')
export class ArticleController {
  @Post()
  async createPost() {
    return 'mypost 1';
  }
}
