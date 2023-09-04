import { RegistrationDto } from "@notification-domain/dto";
import { State } from "@notification-domain/entities";

export class UpdateStateEvent {
    constructor(
        public readonly state : State,
        public readonly data ?: RegistrationDto,
        public readonly traceId ?: string,
        ) {}
}