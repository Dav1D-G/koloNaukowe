import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbModuleModule } from './db-module/db-module.module';

@Module({
  imports: [
    DbModuleModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'notification-state-db',
<<<<<<< HEAD
=======
      // username: 'root',
      // password: 'example',
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    DbModuleModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class NotificationStateDbModule {}
