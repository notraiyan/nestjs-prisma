import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../Shared/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(id: number): Promise<User[] | User> {
    if (id) {
      return await this.prisma.user.findFirst({
        where: {
          id,
        },
      });
    }
    return await this.prisma.user.findMany();
  }

  async createUser(data: User): Promise<User> {
    return await this.prisma.user.create({
      data,
    });
  }
}
