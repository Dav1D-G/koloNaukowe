export class RegisterEmailEvent {
  constructor(
    public readonly urlKafka : string ,
    public readonly traceId : string,
  ) {}
}
