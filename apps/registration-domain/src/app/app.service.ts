import { Injectable } from '@nestjs/common';
//import * as KeycloakAdminClient from '@keycloak/keycloak-admin-client';
import {keycloak} from '@registration-domain/keycloak'

import {UserDataDto} from './../common/dto/user-data.dto/user-data.dto'



@Injectable()
export class AppService {

  // private keycloakAdmin: any;

  constructor(){}

  // async authenticate()
  // {
  //   await this.keycloakAdmin.auth({
  //     grantType : 'password',
  //     clientId : 'nest-app',
  //     username : 'admin',
  //     password : 'admin'
  //   })
  // }

  async createUser(userData : UserDataDto)
  {
    const {username,email,password,firstName,lastName} = userData;
    try
    {
      const {keycloakAdminClient,keycloakConfig} = await keycloak();

      const client = await keycloakAdminClient();

      const userData = 
      {
        username,
        email,
        enabled : true,
        firstName,
        lastName,
        credentials : [{
          type : 'password',
          value : password,
          temporary : false
        }]
      }

     const createUser = await client.users.create(userData);
     if(!createUser)
     {
      throw new Error("Registration failed");
     }


     return {
      success : true,
      status : 201,
      msg : "User Created"
     }

    }
    catch(err)
    {
      console.error('Wystąpił błąd podczas tworzenia użytkownika', err);
      throw err;
    }
   


  }

  getData(): { message: string } {
    return ({ message: 'Hello API' });
  }
}
