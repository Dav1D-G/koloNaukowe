

import { CommandHandler, ICommandHandler} from '@nestjs/cqrs';

import {UpdateStateCommand} from './../command/UpdateStateCommand'


import { DbModuleService } from '@notification-domain/notification-state-db';


@CommandHandler(UpdateStateCommand)
export class UpdateStateCommandHandler implements ICommandHandler<UpdateStateCommand> {
  constructor(
    private readonly DBNotification: DbModuleService
  ) {}

  async execute(command: UpdateStateCommand) {
    const { state, traceId } = command;


    await this.DBNotification.updateState(state, null, traceId); // Poprawić na sage 


  }
}
