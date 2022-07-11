import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/createUserDto.dto';
import { UserService } from './user.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('users')
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserEntity> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }
}
