import { ArticleType } from './article.types';

export interface ArticlesResponseInterface {
  articles: ArticleType[];
  articlesCount: number;
}
