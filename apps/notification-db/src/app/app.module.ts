import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import {NotificationEntity} from "./entities/notification-entity/notification-entity";
import { NotificationDbModule } from './notification-db/notification-db.module';
import {notificationStateDbProviders} from "./notification-db/db-datasource/datasource.providers";


@Module({
  imports: [NotificationDbModule, TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'notification-state-db',
    // username: 'root',
    // password: 'example',
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
  })],
  controllers: [],
  providers: [],

})
export class AppModule {}
