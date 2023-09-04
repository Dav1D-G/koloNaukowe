import { Injectable, UploadedFile } from '@nestjs/common';
import  {MinioService} from 'nestjs-minio-client';



@Injectable()
export class NotificationBucketService {
    constructor( private readonly minioService : MinioService){}




    async putTemplate(file : string , traceId : string)
    {
        console.log('Wsadzam nową wygenerowaną templatkę.......');
       return await this.minioService.client.putObject('notification-bucket',`generations/accounts/${traceId}.json`, file);
    }

    async getTemplate(templateId : string)
    {
       return await this.minioService.client.getObject('notification-bucket', `templates/accounts/${templateId}.json`);
    }

    async getGeneratedTemplate(traceId : string)
    {
       return await this.minioService.client.getObject('notification-bucket' , `generations/accounts/${traceId}.json`);
    }

}
