import { AggregateRoot } from '@nestjs/cqrs';
import { RegisterEmailEvent } from '../events/impl/RegisterEmail.event';

export class Email extends AggregateRoot {
  constructor(
    private readonly urlKafka: string,
    private readonly traceId : string,
    ) {
    super();
    this.autoCommit = true;
  }

  sendEmail() {
    // logic
    this.apply(new RegisterEmailEvent(this.urlKafka , this.traceId));
  }
}
