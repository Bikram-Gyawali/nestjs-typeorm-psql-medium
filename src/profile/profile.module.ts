import { FollowEntity } from './follow.entity';
import { UserEntity } from './../user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FollowEntity])],
  controllers: [],
  providers: [],
})
export class ProfileModule {}
