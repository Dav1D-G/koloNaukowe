import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { SmsServiceModule } from './sms-service/sms-service.module';

@Module({
  imports: [SmsServiceModule],
=======

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e
})
export class AppModule {}
