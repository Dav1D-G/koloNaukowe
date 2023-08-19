import { Module } from '@nestjs/common';
import {NotificationManagerController} from "./notification-manager.controller";
import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { ParamCommandHandler } from '../cqrs/commands-handlers';
//import {NotificationDbService} from '../../../../notification-db/src/app/notification-db/notification-db.service'
//import { NotificationEntity } from 'apps/notification-db/src/app/entities/notification-entity/notification-entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

import {DbModuleService, Entities, NotificationStateDbModule} from '../../../../../libs/notification-state-db/src/index'

@Module({
  imports : [CqrsModule , ClientsModule.register([
    {
      name: 'MANAGER_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'manager_notification',
          brokers: ['localhost:29092'],
        },
        consumer: {
          groupId: 'temp-consumer'
        }
      }
    },
  ]), NotificationStateDbModule , TypeOrmModule.forFeature([Entities])],
  providers : [CommandBus , ...ParamCommandHandler , DbModuleService ],
  controllers: [NotificationManagerController]

})
export class NotificationManagerModule {}
