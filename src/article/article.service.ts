import { UserEntity } from 'src/user/user.entity';
import { ArticleEntity } from './article.entity';
import { CreateArticleDto } from './dto/createArticle.dto';
import {
  Injectable,
  HttpException,
  HttpStatus,
  Get,
  Query,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ArticleResponseInterface } from './types/articleResponse.interface';
import slugify from 'slugify';
import { User } from 'src/user/decorators/user.decorator';
@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  @Get()
  async findAll(
    @User('id') currentUserId: number,
    @Query() query: any,
  ): Promise<ArticleResponseInterface> {
    return await this.articleService.findAll(currentUserId, query);
  }

  async createArticle(
    currentUser: UserEntity,
    createArticleDto: CreateArticleDto,
  ): Promise<ArticleEntity> {
    const article = new ArticleEntity();
    Object.assign(article, createArticleDto);
    if (!article.tagList) {
      article.tagList = [];
    }
    article.slug = this.getSlug(createArticleDto.title);
    article.author = currentUser;

    return await this.articleRepository.save(article);
  }

  async findBySlug(slug: string): Promise<ArticleEntity> {
    return await this.articleRepository.findOne({ where: { slug } });
  }

  buildArticleResponse(article: ArticleEntity): ArticleResponseInterface {
    return { article };
  }

  private getSlug(title: string): string {
    return (
      slugify(title, { lower: true }) +
      '-' +
      ((Math.random() * Math.pow(36, 6)) | 0).toString(36)
    );
  }

  async deleteArticle(slug, currentUserId: number): Promise<DeleteResult> {
    const article = this.findBySlug(slug);
    if (!article)
      throw new HttpException('Article dos not exist ', HttpStatus.NOT_FOUND);

    if (article.author.id !== currentUserId) {
      throw new HttpException('You are not an author', HttpStatus.FORBIDDEN);
    }
    return await this.articleRepository.delete({ slug });
  }

  async updteArticle(
    slug: string,
    currentUserId: number,
    updateArticle: CreateArticleDto,
  ): Promise<ArticleEntity> {
    const article = await this.findBySlug(slug);
    if (!article)
      throw new HttpException('Article not exist', HttpStatus.NOT_FOUND);
    if (this.articleRepository.author.id !== currentUserId)
      throw new HttpException('You are not an author', HttpStatus.FORBIDDEN);

    Object.assign(article, updateArticle);

    return await this.articleRepository.save(article);
  }
}
