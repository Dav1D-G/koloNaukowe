<<<<<<< HEAD
import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { REGISTER } from '@notification-domain/constants';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegistrationCommand } from '../cqrs/commands/RegistrationStateCommand';
import { RegistrationDto } from '@notification-domain/dto';
import { GettingTemplateQuery } from '../cqrs/query/GetingTemplateQuery';
import { RegistrationEmailCommand } from '../cqrs/commands/RegistationEmailCommand';
import { PATH_NAME_MINIO } from '@notification-domain/constants';


import Mustache from 'mustache';
import { CreatingTemplateCommand } from '../cqrs/commands/CreatingTemplatesCommand';

@Controller()
export class NotificationManagerController {
  constructor(
    @Inject('MANAGER_SERVICE')
    private readonly kafkaService: ClientKafka,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @MessagePattern(REGISTER)
  async accountRegistration(@Payload() contextRegistration: RegistrationDto) {

    const registrationState = await this.commandBus.execute(
      // Thanks to this we put into DB info about user and we are creating the new state
=======
import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { REGISTER } from '@notification-domain/constants';
import { CommandBus } from '@nestjs/cqrs';
//import {RegistrationDto} from "../../../../../libs/dto/src/dtos/registration.dto/registration.dto";
// import {RegistrationCommand} from "../cqrs/commands/registrationCommand";

import { RegistrationCommand } from '../cqrs/commands/registrationCommand';
//import { Dto } from 'libs/notification-state-db/src/lib/dto/dto';
import { Dto } from '@notification-domain/notification-state-db';
import { GetUser } from '../cqrs/commands/get-user/get-user';

@Controller()
export class NotificationManagerController {
  constructor(private readonly commandBus: CommandBus) {}

  @MessagePattern(REGISTER)
  async accountRegistration(@Payload() contextRegistration: Dto) {
    console.log(`O to nasze dane:`);
    console.log(contextRegistration);
    const post = await this.commandBus.execute(
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e
      new RegistrationCommand(
        contextRegistration.name,
        contextRegistration.email,
        contextRegistration.phone
      )
    );
<<<<<<< HEAD

    const getTemplate = await this.queryBus.execute(
      new GettingTemplateQuery(PATH_NAME_MINIO, registrationState.traceId)
    );

    const template = JSON.parse(getTemplate);

    const generatedMustache = Mustache.render(JSON.stringify(template.htmlContent),{ name : registrationState.data.name , email : registrationState.data.email , phone : registrationState.data.phone});

    await this.commandBus.execute(new CreatingTemplateCommand(generatedMustache,registrationState.traceId));

    await this.commandBus.execute(
      new RegistrationEmailCommand('email.accounts.registration', registrationState.traceId)
    );

    
    // this execution perform two things in the same time , to send data to other services , sms-service , email-service



=======
    return post;
  }

  @Get()
  async getUsers()
  {
    const post = await this.commandBus.execute(new GetUser());

    return post;
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e

  }
}
