import { Module } from '@nestjs/common';
import { DbModuleService } from './db-module.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import  {Entities} from '../entities/entities'

@Module({
    imports : [TypeOrmModule.forFeature([Entities])],
  providers: [DbModuleService]
})
export class DbModuleModule {}
