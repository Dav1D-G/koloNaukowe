import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { RegisterEmailEvent } from '../impl/RegisterEmail.event';
import { ClientKafka } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';


/*

ROZWIĄZANIE PROBLEMU:

import {firstValueFrom} from 'rxjs'

Jeżeli chcemy skorzystać z send to :
await firstValueFrom(this.kafkaService.send(event.urlKafka , "dupa234")); 

*/

@EventsHandler(RegisterEmailEvent)
export class RegisterEmailEventHandler implements IEventHandler<RegisterEmailEvent> {
  constructor(
    @Inject('MANAGER_SERVICE')
    private readonly kafkaService : ClientKafka
    ) {}

  handle(event: RegisterEmailEvent) {
    console.log('Wysyłam dane do email-service.........');
    this.kafkaService.emit(event.urlKafka , event.traceId); 
  }
}
