import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getData(@Body() data: { name: string; phone?: string; email?: string }) {
    console.log(data);
    return this.appService.getData(data);
  }

  @Get()
  getUsers(){
    return this.appService.getUsers();
  }
}
