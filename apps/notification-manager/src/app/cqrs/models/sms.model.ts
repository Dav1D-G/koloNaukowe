import { AggregateRoot } from '@nestjs/cqrs';

import {RegisterSmsEvent} from './../events/impl/RegisterSms.events'


export class Sms extends AggregateRoot {
  constructor(
    private readonly urlKafka: string,
    private readonly traceId : string
    ) {
    super();
    this.autoCommit = true;
  }

  sendSms() {
    this.apply(new RegisterSmsEvent(this.urlKafka , this.traceId));
  }
}
