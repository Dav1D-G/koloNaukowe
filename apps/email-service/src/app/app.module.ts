import { Module } from '@nestjs/common';

<<<<<<< HEAD
import {ClientsModule, Transport} from '@nestjs/microservices'
import { EmailServiceModule } from './email-service/email-service.module';


@Module({
  imports: [ EmailServiceModule],
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
