import { Module } from '@nestjs/common';
import { NotificationBucketService } from './notification-bucket.service';

import {MinioModule, MinioService} from 'nestjs-minio-client';
import {ConfigModule, ConfigService} from '@nestjs/config'
import {ClientOptions} from 'minio';

@Module({
    imports : [MinioModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        endPoint: 'localhost', //configService.get('MINIO_ENDPOINT')
        port: 9000,
        useSSL: false, // If on localhost, keep it at false. If deployed on https, change to true
        accessKey: configService.get('MINIO_ACCESS_KEY'),
        secretKey: configService.get('MINIO_SECRET_KEY'),
      } as ClientOptions) 
    }), ConfigModule.forRoot({isGlobal:true})],
    providers : [NotificationBucketService],
    exports : [MinioModule]
  })
export class NotificationBucketModule {}
