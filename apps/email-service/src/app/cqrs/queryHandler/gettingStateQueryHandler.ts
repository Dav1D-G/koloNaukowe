import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import {GettingStateQuery} from './../query/gettingStateQuery'
import { DbModuleService } from '@notification-domain/notification-state-db';


@QueryHandler(GettingStateQuery)
export class CreateTemplateCommandHandler implements IQueryHandler<GettingStateQuery> {
  constructor(private readonly dbService: DbModuleService) {}

  async execute(query : GettingStateQuery) {
    const  {traceId} = query;
    const post = await this.dbService.getState(traceId);
    return post;
  }
}
