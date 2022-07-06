import { TagEntity } from './tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
