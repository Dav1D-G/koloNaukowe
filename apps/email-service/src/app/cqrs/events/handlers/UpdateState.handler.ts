import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import {UpdateStateEvent} from './../impl/UpdateState.event'
import { DbModuleService } from '@notification-domain/notification-state-db';


/*

ROZWIĄZANIE PROBLEMU:

import {firstValueFrom} from 'rxjs'

Jeżeli chcemy skorzystać z send to :
await firstValueFrom(this.kafkaService.send(event.urlKafka , "dupa234")); 

*/

@EventsHandler(UpdateStateEvent)
export class UpdateStateEventHandler implements IEventHandler<UpdateStateEvent> {
    constructor(
        private readonly DBNotification: DbModuleService,
    ) {}
  
  async handle(event: UpdateStateEvent) {

    const  {state , data , traceId } = event;

    await this.DBNotification.updateState(state, data , traceId);
     
  }
}
