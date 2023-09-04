import { State } from "@notification-domain/entities";

export class UpdateStateCommand {
    constructor(
        public readonly state : State,
        public readonly traceId : string
        ) {}
}
