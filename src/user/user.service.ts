import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@/prisma.service';
import { UserId } from '@/user/user.types';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getById(userId: UserId) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...user } = await this.prisma.user.findUniqueOrThrow({
        where: {
          id: userId,
        },
      });
      return user;
    } catch {
      throw new NotFoundException();
    }
  }
}
