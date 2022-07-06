import { CreateUserDto } from './../dto/CreateUserDto.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
