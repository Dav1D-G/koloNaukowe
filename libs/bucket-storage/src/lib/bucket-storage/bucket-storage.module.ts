import { Module } from '@nestjs/common';
import { BucketStorageController } from './bucket-storage.controller';
import { BucketStorageService } from './bucket-storage.service';
import {MinioModule} from 'nestjs-minio-client'
import { ConfigModule, ConfigService } from '@nestjs/config';
import {ClientOptions} from 'minio'
@Module({
imports : [MinioModule.registerAsync({
    imports : [ConfigModule],
    inject : [ConfigService],
    useFactory : (configService : ConfigService) =>({
        endPoint: configService.get<string>('MINIO_END_POINT'),
        port: 9000,
        useSSL: false,
        accessKey: configService.get<string>('MINIO_ACCESS_KEY'),
        secretKey: configService.get<string>('MINIO_SECRET_KEY'),
      } as ClientOptions)
    
})],
  controllers: [BucketStorageController],
  providers: [BucketStorageService]
})
export class BucketStorageModule {}
