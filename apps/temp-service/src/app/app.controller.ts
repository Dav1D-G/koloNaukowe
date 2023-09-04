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
<<<<<<< HEAD

  @Post('templatka')
  putData(@Body() data : {file?:string,metadata : {templateId:string}}){
    console.log(data);
    return this.appService.putData(data);
  }
=======
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e
}
