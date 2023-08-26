/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

//import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { KafkaOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
// import { NotificationManagerController } from './app/notification-manager/notification-manager.controller';
// import { NotificationManagerModule } from './app/notification-manager/notification-manager.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });

  const microService = await NestFactory.createMicroservice<KafkaOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:29092'],
        },
        consumer: {
          groupId: 'temp-consumer',
        },
      },
    }
  );
  const port = process.env.PORT || 7000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`
  );

  microService.listen();
  await app.startAllMicroservices();
  await app.init();
}

bootstrap();
