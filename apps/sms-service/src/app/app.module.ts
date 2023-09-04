import { Module } from '@nestjs/common';
import { SmsServiceModule } from './sms-service/sms-service.module';

@Module({
  imports: [SmsServiceModule],
})
export class AppModule {}
