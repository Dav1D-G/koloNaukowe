import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { REGISTER } from '@notification-domain/constants';
import { CommandBus } from '@nestjs/cqrs';
//import {RegistrationDto} from "../../../../../libs/dto/src/dtos/registration.dto/registration.dto";
// import {RegistrationCommand} from "../cqrs/commands/registrationCommand";

import { RegistrationCommand } from '../cqrs/commands/registrationCommand';
//import { Dto } from 'libs/notification-state-db/src/lib/dto/dto';
import { Dto } from '@notification-domain/notification-state-db';

@Controller()
export class NotificationManagerController {
  constructor(private readonly commandBus: CommandBus) {}

  @MessagePattern(REGISTER)
  async accountRegistration(@Payload() contextRegistration: Dto) {
    console.log(`O to nasze dane:`);
    console.log(contextRegistration);
    const post = await this.commandBus.execute(
      new RegistrationCommand(
        contextRegistration.name,
        contextRegistration.email,
        contextRegistration.phone
      )
    );
    return post;
  }
}
