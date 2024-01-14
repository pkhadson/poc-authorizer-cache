import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Auth } from '@nest-cdk/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Auth('UserAuth')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Auth('UserAuth')
  @Get('/id/:id')
  getHello2(): string {
    return this.appService.getHello();
  }

  @Auth('UserAuth')
  @Get('/2')
  getHello3(): string {
    return this.appService.getHello();
  }
}
