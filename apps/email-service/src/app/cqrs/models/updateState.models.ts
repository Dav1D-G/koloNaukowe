import { AggregateRoot } from '@nestjs/cqrs';
import { UpdateStateEvent } from '../events/impl/UpdateState.event';

import { RegistrationDto } from "@notification-domain/dto";
import { State } from "@notification-domain/entities";

export class UpdateState extends AggregateRoot {
  constructor() {
    super();
    this.autoCommit = true;
  }

  updateState(state : State , data ?: RegistrationDto , traceId ?: string) {
    // logic
    this.apply(new UpdateStateEvent(state , data , traceId));
  }
}




