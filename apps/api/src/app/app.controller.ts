import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('sign-in')
  login() {
    return this.appService.createUser({
      name: 'admin',
      email: 'admin@gmail.com',
    });
  }

  @Post('sign-up')
  createUser() {
    return this.appService.createUser({
      name: 'client',
      email: 'client@gmail.com',
    });
  }
}
