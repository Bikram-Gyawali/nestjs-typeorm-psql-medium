import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  async createArticle() {
    return 'createArticle from service';
  }
}
// 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