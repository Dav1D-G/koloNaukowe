import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { RegistrationSmsCommand } from '../commands/RegistrationSmsCommand';

import {Sms} from './../models/sms.model'

@CommandHandler(RegistrationSmsCommand)
export class RegistrationSmsCommandHandler implements ICommandHandler<RegistrationSmsCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: RegistrationSmsCommand) {
    const { urlKafka , traceId } = command;

    const SmsModel = this.publisher.mergeClassContext(Sms);

    const sms = new SmsModel(urlKafka , traceId);

    sms.sendSms();

    //return post;
  }
}
