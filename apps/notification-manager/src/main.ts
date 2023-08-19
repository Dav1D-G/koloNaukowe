/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

//import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { KafkaOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';
// import { NotificationManagerController } from './app/notification-manager/notification-manager.controller';
// import { NotificationManagerModule } from './app/notification-manager/notification-manager.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });


  // await app.init();

  // const appService = app
  //   .select(NotificationManagerModule)
  //   .get(NotificationManagerController, { strict: true })
  // await appService.accountRegistration;
  // const configService = app.get(configService);

  // app.connectMicroservice({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       brokers: [configService.get<string>('KAFKA_HOST')],
  //     },
  //     consumer: {
  //       groupId: `${process.env.NODE_ENV}_${configService.get<string>(
  //         'KAFKA_TO_PARAM_SERVICE_GROUP_ID',
  //       )}`,
  //     },
  //   },
  // } as KafkaOptions);
  const microService = await NestFactory.createMicroservice<KafkaOptions>(AppModule, {transport : Transport.KAFKA, options : {
    client : {
      brokers : ['localhost:29092'],
  },
  consumer : {
      groupId : 'temp-consumer',
  }
   } });

  microService.listen();
  await app.startAllMicroservices();
  await app.init();
}

bootstrap();
