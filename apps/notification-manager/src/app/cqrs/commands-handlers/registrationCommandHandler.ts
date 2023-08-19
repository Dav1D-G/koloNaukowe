import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { RegistrationCommand } from '../commands/registrationCommand';

import { DbModuleService } from '@notification-domain/notification-state-db';

@CommandHandler(RegistrationCommand)
export class CreatePostHandler implements ICommandHandler<RegistrationCommand> {
  constructor(private readonly dbService: DbModuleService) {}

  async execute(command: RegistrationCommand) {
    console.log('Jestem tutaj');
    const { name, email, phone } = command;
    const post = this.dbService.register({ name, email, phone });
    return post;
  }
}
