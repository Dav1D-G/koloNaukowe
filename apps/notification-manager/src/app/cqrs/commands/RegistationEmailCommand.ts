export class RegistrationEmailCommand {
    constructor(
        public readonly urlKafka : string,
        public readonly traceId : string
        ){}
}