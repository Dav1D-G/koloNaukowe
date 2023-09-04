import { Module } from '@nestjs/common';
import { DbModuleService } from './db-module.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchemaState } from '@notification-domain/entities';


@Module({
  imports: [TypeOrmModule.forFeature([SchemaState])],
  providers: [DbModuleService],
})
export class DbModuleModule {}
