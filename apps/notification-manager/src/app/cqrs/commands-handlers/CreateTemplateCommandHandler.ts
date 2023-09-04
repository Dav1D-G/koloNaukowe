import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { CreatingTemplateCommand } from '../commands/CreatingTemplatesCommand';

import { NotificationBucketService } from 'libs/notification-bucket/src/index';
import { DbModuleService } from '@notification-domain/notification-state-db';
import { State } from '@notification-domain/entities';
import { UpdateState } from '../models/updateState.model';

@CommandHandler(CreatingTemplateCommand)
export class CreateTemplateCommandHandler implements ICommandHandler<CreatingTemplateCommand> {
  constructor(
    private readonly DBNotification: DbModuleService,
    private readonly DBBucket: NotificationBucketService ,
    private readonly publisher : EventPublisher,
  ) {}

  async execute(command: CreatingTemplateCommand) {
    console.log('Tworze Templatke.....');

    const { file, traceId } = command;

    const parsed = JSON.stringify(file, null, 2);

  

    const post = await this.DBBucket.putTemplate(parsed, traceId);

    console.log('Wygenerowano templatkę .....');
    

    const updatedState = this.publisher.mergeClassContext(UpdateState);
    const state = new updatedState();
    await state.updateState(State.GENERATION_CREATED , null , traceId);
    // równoważne z await this.DBNotification.updateState(State.GENERATION_CREATED, null, traceId) tylko zrobione jest to przez EVENT;



    return post;
  }
}
