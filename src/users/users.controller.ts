import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':user_id')
  async getUser(@Param('user_id') user_id: string): Promise<User> {
    return this.usersService.getUserById(user_id);
  }

  @Get()
  async getUsers(): Promise<User[]> {
      return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
      return this.usersService.createUser(createUserDto)
  }

  @Patch(':user_id')
  async updateUser(@Param('user_id') user_id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
      return this.usersService.updateUser(user_id, updateUserDto);
  }
}
