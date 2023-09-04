import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { RegistationTemplateQuery } from './../query/RegistrationTemplateQuery';

import { NotificationBucketService } from '@notification-domain/notification-bucket';
import { DbModuleService } from '@notification-domain/notification-state-db';

import { State } from '@notification-domain/entities';

@QueryHandler(RegistationTemplateQuery)
export class RegistrationTemplateQueryHandler implements IQueryHandler<RegistationTemplateQuery> {
  constructor(
    private readonly DBBucket: NotificationBucketService,
    private readonly DBNotification: DbModuleService
  ) {}

  async execute(query: RegistationTemplateQuery) {
    const { traceId } = query;

    const template = await this.DBBucket.getGeneratedTemplate(traceId);

    await this.DBNotification.updateState(State.SENDING_EMAIL, null, traceId); // Poprawić na sage 

    return new Promise((resolve)=>{
      try{
  
        const bufs = [];
  
        template.on('data' , dump => bufs.push(dump));
        template.on('end', ()=> {
          console.log(`Read configuration file for device was end with the success`);
          resolve(Buffer.concat(bufs))
        })
      }catch(err){
        console.log(`It's following error : ${err}`);
      }
     })

  }
}
