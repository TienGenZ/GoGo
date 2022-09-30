import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: { name: string; email: string }) {
    return this.prisma.user.create({
      data,
    });
  }

  async login(data: { name: string; email: string }) {
    return this.prisma.user.create({
      data,
    });
  }
}
