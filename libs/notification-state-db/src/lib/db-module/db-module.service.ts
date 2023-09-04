import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { SchemaState , State } from '@notification-domain/entities';
import { RegistrationDto } from "@notification-domain/dto"

//import {template} from '@notification-domain/classes'


@Injectable()
export class DbModuleService {
  constructor(
    @InjectRepository(SchemaState)
    private repository: Repository<SchemaState>
  ) {}

  async register(registrationDto: RegistrationDto) {
  
    const newState =  await this.updateState(State.NEW ,registrationDto)

    console.log(`Udało się stworzyć następujące dane : ${newState}`);

    return newState;
  }


  async updateState(state : State , data?: RegistrationDto , traceId?: string)
  {
    if(data)
    {
      const newState = {
        traceId: uuidv4(),
        data: data,
        state: State.NEW,
      }
      
      const status =  this.repository.create(newState);
      await this.repository.save(status);

      console.log(`Stworzono nowy stan : ${newState.state}`);

      return newState;
    }

    const users = await this.repository.findOne({where : {traceId}});

    const updatingState = await this.repository.preload({
      stateId : users?.stateId,
      traceId : traceId,
      state : state
    });

    console.log(`Zaaktualizowano state : ${updatingState?.state}`);

    return updatingState;

  }

  async getState(traceId:string){
    const user = await this.repository.findOneBy({
      traceId
    });

    console.log(user);


  }

  
}
