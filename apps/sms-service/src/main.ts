/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

<<<<<<< HEAD
import {KafkaOptions, Transport} from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microService = await NestFactory.createMicroservice<KafkaOptions>(AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:29092'],
        },
        consumer: {
          groupId: 'service-consumer',
        },
      },
    })

    
  await microService.listen();
=======
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
