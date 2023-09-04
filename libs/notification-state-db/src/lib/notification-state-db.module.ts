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
