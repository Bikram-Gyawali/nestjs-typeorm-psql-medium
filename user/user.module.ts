import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';

@Module({})
export class UserModule {
  imports: [];
  controllers: [UserController];
  services: [UserService];
}
