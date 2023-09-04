import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { RegistrationEmailCommand } from '../commands/RegistationEmailCommand';

import { Email } from '../models/email.model';

@CommandHandler(RegistrationEmailCommand)
export class RegistrationEmailCommandHandler implements ICommandHandler<RegistrationEmailCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: RegistrationEmailCommand) {
    const { urlKafka , traceId } = command;

    const EmailModel = this.publisher.mergeClassContext(Email);

    const email = new EmailModel(urlKafka, traceId);

    email.sendEmail();

    //return post;
  }
}
