export class RegistrationSmsCommand {
    constructor(
        public readonly urlKafka : string,
        public readonly traceId : string,
        ){}
}