import { UserService } from './user.service';
import { Controller, Post } from '@nestjs/common';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('users')
  async createUser(): Promise<any> {
    console.log('users contnroller hit');
    return this.userService.createUser();
  }
}
