import { UpdateUserDto } from './dto/updateUser.dto';
import { AuthGuard } from './guards/auth.guard';
import { UserEntity } from './user.entity';
import { ExpressRequest } from './../types/expressRequest.interface';
import { LoginUserDto } from './dto/loginUser.dto';
import { UserResponseInterface } from './types/userResponse.interface';
import { CreateUserDto } from './dto/createUserDto.dto';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { Any } from 'typeorm';
import { User } from './decorators/user.decorator';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async login(
    @Body('user') loginDto: LoginUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.login(loginDto);
    return this.userService.buildUserResponse(user);
  }

  @Get('user')
  @UseGuards(AuthGuard)
  async currentUser(
    // @Req() request: ExpressRequest,
    @User() user: UserEntity,
  ): Promise<UserResponseInterface> {
    console.log(user);
    return this.userService.buildUserResponse(user);
  }

  @Put('user')
  @UseGuards(AuthGuard)
  async updateCurrentUser(
    @User('id') currentUserId: number,
    @Body('user') updateUserDto: UpdateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.updateUser(
      currentUserId,
      updateUserDto,
    );
    return this.userService.buildUserResponse(user);
  }
}
