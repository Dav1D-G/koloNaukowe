export class RegisterSmsEvent {
    constructor(
      public readonly urlKafka : string,
      public readonly traceId : string
    ) {}
  }
  