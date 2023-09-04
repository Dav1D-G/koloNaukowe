import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { GetUser } from '../commands/get-user/get-user';

import { DbModuleService } from '@notification-domain/notification-state-db';

@CommandHandler(GetUser)
export class GetUserHandler implements ICommandHandler<GetUser> {
  constructor(private readonly dbService: DbModuleService) {}

  async execute() {
    console.log('Odbieram usera');
    const post =await  this.dbService.getUser();
    return post;
  }
}
