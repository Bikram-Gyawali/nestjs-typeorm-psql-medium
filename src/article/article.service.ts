import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  async createArticle() {
    return 'createArticle from service';
  }
}
