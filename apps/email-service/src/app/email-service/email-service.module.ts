import { Module } from '@nestjs/common';
import { EmailServiceService } from './email-service.service';
import { EmailServiceController } from './email-service.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbModuleService, NotificationStateDbModule } from '@notification-domain/notification-state-db';
import {NotificationBucketModule, NotificationBucketService} from 'libs/notification-bucket/src/index';

import  {SchemaState} from '@notification-domain/entities'
import { CqrsModule } from '@nestjs/cqrs';

import {QueryHandler} from './../cqrs/queryHandler/index'
import {CommandHandler} from './../cqrs/commandsHandler/index'
import {EventsHandler} from './../cqrs/events/index'

import {SendgridModule , SendgridService} from '@notification-domain/sendgrid'

@Module({
  imports : [ClientsModule.register([
    {
      name: 'EMAIL_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'email_notification',
          brokers: ['localhost:29092'],
        },
        consumer: {
          groupId: 'send_template',
        },
      },
    },
  ]), CqrsModule , NotificationStateDbModule  , TypeOrmModule.forFeature([SchemaState]) , NotificationBucketModule , SendgridModule ], //NotificationBucketModule
  providers: [EmailServiceService , DbModuleService ,  ...QueryHandler , ...CommandHandler , ...EventsHandler  , NotificationBucketService , SendgridService ], //NotificationBucketService
  controllers: [EmailServiceController]
})
export class EmailServiceModule {}


// import { Module } from '@nestjs/common';
// import { NotificationManagerController } from './notification-manager.controller';
// import { CommandBus, CqrsModule } from '@nestjs/cqrs';
// import { ParamCommandHandler } from '../cqrs/commands-handlers';
// //import {NotificationDbService} from '../../../../notification-db/src/app/notification-db/notification-db.service'
// //import { NotificationEntity } from 'apps/notification-db/src/app/entities/notification-entity/notification-entity';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ClientsModule, Transport } from '@nestjs/microservices';

// import { DbModuleService, Entities, NotificationStateDbModule } from '@notification-domain/notification-state-db';
// import {NotificationBucketModule, NotificationBucketService} from 'libs/notification-bucket/src/index';


// @Module({
//   imports: [
//     CqrsModule,
//     ClientsModule.register([
//       {
//         name: 'MANAGER_SERVICE',
//         transport: Transport.KAFKA,
//         options: {
//           client: {
//             clientId: 'manager_notification',
//             brokers: ['localhost:29092'],
//           },
//           consumer: {
//             groupId: 'service-consumer',
//           },
//         },
//       }]),
//     NotificationStateDbModule,
//     NotificationBucketModule,
//     TypeOrmModule.forFeature([Entities]),
//   ],
//   providers: [...ParamCommandHandler, DbModuleService , NotificationBucketService],
//   controllers: [NotificationManagerController],
// })
// export class NotificationManagerModule {}
