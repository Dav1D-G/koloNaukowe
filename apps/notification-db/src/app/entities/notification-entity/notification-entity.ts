import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { RegistrationDto } from '../../../../../../libs/dto/src/dtos/registration.dto/registration.dto';
@Entity()
export class NotificationEntity {
  @ObjectIdColumn()
  stateId: string;

  @Column()
  traceId: string;

  @Column()
  state: State;

  @Column()
  data: RegistrationDto;
}

export enum State {
  NEW = 'NEW',
  CREATING_GENERATION = 'CREATING GENERATION',
  GENERATION_CREATED = 'GENERATION CREATED',
  SENDING_EMAIL = 'SENDING EMAIL',
  EMAIL_SENT = 'EMAIL SENT',
  SENDING_SMS = 'SENDING SMS',
  SMS_SENT = 'SMS SENT',
  DONE = 'DONE',
}
