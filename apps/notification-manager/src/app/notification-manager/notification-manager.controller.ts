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
      new RegistrationCommand(
        contextRegistration.name,
        contextRegistration.email,
        contextRegistration.phone
      )
    );

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




  }
}
