import { EventPublisher, IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { GettingTemplateQuery } from '../query/GetingTemplateQuery';

import { NotificationBucketService } from 'libs/notification-bucket/src/index';
import { DbModuleService } from '@notification-domain/notification-state-db';
import { State } from '@notification-domain/entities';
import {UpdateState} from './../models/updateState.model'
import { resolve } from 'path';

@QueryHandler(GettingTemplateQuery)
export class GettingTemplateQueryHandler implements IQueryHandler<GettingTemplateQuery> {
  constructor(
    private readonly DBNotification: DbModuleService,
    private readonly DBBucket: NotificationBucketService, 
    private readonly publisher : EventPublisher,
  ) {}

  async execute(query: GettingTemplateQuery) {
    console.log('Odbieranie Templatki.....');

    const { templateId, traceId } = query;

    const post = await this.DBBucket.getTemplate(templateId); // pozyskanie templatki z Bucketa

    

    const SmsModel = this.publisher.mergeClassContext(UpdateState);

    const sms = new SmsModel();

    await sms.updateState(State.CREATING_GENERATION , null , traceId);

   // await this.DBNotification.updateState(State.CREATING_GENERATION, null, traceId); // zmiana state na Notification DB

   return new Promise((resolve)=>{
    try{

      const bufs = [];

      post.on('data' , dump => bufs.push(dump));
      post.on('end', ()=> {
        console.log(`Read configuration file for device was end with the success`);
        resolve(Buffer.concat(bufs))
      })
    }catch(err){
      console.log(`It's following error : ${err}`);
    }
   })
   

  }
}
