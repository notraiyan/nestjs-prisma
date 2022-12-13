import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers(@Req() req: any): Promise<User[] | User> {
    return this.userService.getUser(Number(req.query.id));
  }
  @Post()
  CreateUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }
}
