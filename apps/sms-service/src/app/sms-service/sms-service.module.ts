import { Module } from '@nestjs/common';
import { SmsServiceService } from './sms-service.service';
import { SmsServiceController } from './sms-service.controller';

import {CqrsModule} from '@nestjs/cqrs'
import {TypeOrmModule} from '@nestjs/typeorm'
import {SchemaState} from '@notification-domain/entities'
import { ClientsModule, Transport } from '@nestjs/microservices';
import {DbModuleService, NotificationStateDbModule} from '@notification-domain/notification-state-db'

import {CommandHandlers} from './../account/commandHandler/index'

import {MessagebirdModule , MessagebirdService} from '@notification-domain/messagebird'

@Module({
  imports : [CqrsModule , TypeOrmModule.forFeature([SchemaState]) , ClientsModule.register([
    {
      name: 'SMS_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'sms_notification',
          brokers: ['localhost:29092'],
        },
        consumer: {
          groupId: 'send_template',
        },
      },
    },
  ]) , NotificationStateDbModule , MessagebirdModule],
  providers: [SmsServiceService , ...CommandHandlers , DbModuleService , MessagebirdService ],
  controllers: [SmsServiceController]
})
export class SmsServiceModule {}
