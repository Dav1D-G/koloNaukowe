import { Module } from '@nestjs/common';

import {ClientsModule, Transport} from '@nestjs/microservices'
import { EmailServiceModule } from './email-service/email-service.module';


@Module({
  imports: [ EmailServiceModule],
})
export class AppModule {}
