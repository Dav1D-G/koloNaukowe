<<<<<<< HEAD
import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { NotificationManagerController } from './notification-manager.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ParamCommandHandler } from '../cqrs/commands-handlers';
import {QueryHandler} from './../cqrs/queryHandler/index'

import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';

import { DbModuleService, NotificationStateDbModule } from '@notification-domain/notification-state-db';
import { NotificationBucketModule, NotificationBucketService } from '@notification-domain/notification-bucket';

import {EventHandlers} from './../cqrs/events/index'

import {SendDataSagas} from './../cqrs/sagas/index'

import { SchemaState  } from '@notification-domain/entities';





=======
import { Module } from '@nestjs/common';
import { NotificationManagerController } from './notification-manager.controller';
import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { ParamCommandHandler } from '../cqrs/commands-handlers';
//import {NotificationDbService} from '../../../../notification-db/src/app/notification-db/notification-db.service'
//import { NotificationEntity } from 'apps/notification-db/src/app/entities/notification-entity/notification-entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { DbModuleService, Entities, NotificationStateDbModule } from '@notification-domain/notification-state-db';
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e

@Module({
  imports: [
    CqrsModule,
    ClientsModule.register([
      {
        name: 'MANAGER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'manager_notification',
            brokers: ['localhost:29092'],
          },
          consumer: {
<<<<<<< HEAD
            groupId: 'service-consumer',
          },
        },
      }]),
    NotificationStateDbModule,
    NotificationBucketModule,
    TypeOrmModule.forFeature([SchemaState]),
  ],
  providers: [...ParamCommandHandler, ...QueryHandler , ...EventHandlers , SendDataSagas  ,DbModuleService , NotificationBucketService ],
  controllers: [NotificationManagerController],
})
export class NotificationManagerModule implements OnModuleInit {

  constructor(
    @Inject('MANAGER_SERVICE')
    private readonly kafkaService : ClientKafka) {
    
  }

  onModuleInit() {
      this.kafkaService.subscribeToResponseOf((`email.accounts.registration`));
     console.log(`Przekazano kafce następujący topic : email.accounts.registration`);
     this.kafkaService.subscribeToResponseOf(`sms.accounts.registration`);
     console.log(`Przekazano kafce następujący topic : sms.accounts.registration`);
  }
}
=======
            groupId: 'temp-consumer',
          },
        },
      },
    ]),
    NotificationStateDbModule,
    TypeOrmModule.forFeature([Entities]),
  ],
  providers: [...ParamCommandHandler, DbModuleService],
  controllers: [NotificationManagerController],
})
export class NotificationManagerModule {}
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e
