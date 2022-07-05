import { TagEntity } from './../tag/tag.entity';
import { TagModule } from './../tag/tag.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';
@Module({
  imports: [TypeOrmModule.forRoot(config), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// TypeOrmModule.forRoot({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'mediumclone',
//   password: 'bikram',
//   database: 'mediumclone',
//   entities: [TagEntity],
//   synchronize: false,
// })
