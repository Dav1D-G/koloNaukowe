import { Module } from '@nestjs/common';
import { MessagebirdService } from './messagebird.service';


@Module({
  providers: [MessagebirdService],
})
export class MessagebirdModule {}
