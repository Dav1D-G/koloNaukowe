import { Module } from '@nestjs/common';
import { DbModuleService } from './db-module.service';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { SchemaState } from '@notification-domain/entities';


@Module({
  imports: [TypeOrmModule.forFeature([SchemaState])],
=======
import { Entities } from '../entities/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Entities])],
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e
  providers: [DbModuleService],
})
export class DbModuleModule {}
