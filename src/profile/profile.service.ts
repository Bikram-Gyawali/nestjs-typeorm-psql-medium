import { ProfileResponseInterface } from './types/profileResponse.interface';
import { FollowEntity } from './follow.entity';
import { UserEntity } from './../user/user.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileType } from './types/profile.type';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(FollowEntity)
    private readonly followRepository: Repository<FollowEntity>,
  ) {}

  async getProfile(
    currentUserId: number,
    profileUsername: string,
  ): Promise<ProfileType> {
    const user = await this.userRepository.findOne({
      username: profileUsername,
    });
    if (!user) {
      throw new HttpException('Profile does note exist', HttpStatus.NOT_FOUND);
    }
    const follow = await this.followRepository.findOne({
      followerId: currentUserId,
      followingId: user.id,
    });
    return { ...user, following: Boolean(follow) };
  }

  buildProfileResponse(profile: ProfileType): ProfileResponseInterface {
    delete profile.email;
    return { profile };
  }
}
