import { Body, Controller, Get, UseGuards } from "@nestjs/common";
//import { AuthGuard, ResourceGuard, Roles, Unprotected } from "nest-keycloak-connect";
import { AppService } from "./app.service";


import { UserDataDto }from './../common/dto/user-data.dto/user-data.dto'

interface status
{
  success: boolean;
  status: number;
  msg: string;
}

@Controller()
// @UseGuards(AuthGuard, ResourceGuard)
export class AppController {
  constructor(private readonly userService: AppService) {}
@Get('/public')
  //@Unprotected()
  getpublic(): string {
    return `${this.userService.getData().message} from public`;
  }
@Get('/user')
  getUser(@Body() userdataDto : UserDataDto):  Promise<status> {
  return this.userService.createUser(userdataDto);
  }
@Get('/admin')
  getAdmin(): string {
    return `${this.userService.getData()} from admin`;
}
@Get('/realms')
  getAll(): string {
    return `${this.userService.getData()} from all`;
  }
}
