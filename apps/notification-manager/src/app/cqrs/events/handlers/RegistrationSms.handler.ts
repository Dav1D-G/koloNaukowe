import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import {RegisterSmsEvent} from './../impl/RegisterSms.events'
import { ClientKafka } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';


/*

ROZWIĄZANIE PROBLEMU:

import {firstValueFrom} from 'rxjs'

Jeżeli chcemy skorzystać z send to :
await firstValueFrom(this.kafkaService.send(event.urlKafka , "dupa234")); 

*/

@EventsHandler(RegisterSmsEvent)
export class RegisterSmsEventHandler implements IEventHandler<RegisterSmsEvent> {
  constructor(
    @Inject('MANAGER_SERVICE')
    private readonly kafkaService : ClientKafka
    ) {}

  async handle(event: RegisterSmsEvent) {

    console.log('Wysyłam dane do sms-service.........');

    this.kafkaService.emit(event.urlKafka , event.traceId);  
  }
}
