import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entities, State } from '../entities/entities';
import { Repository } from 'typeorm';
import { Dto } from '../dto/dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DbModuleService {
  constructor(
    @InjectRepository(Entities)
    private repository: Repository<Entities>
  ) {}

  register(registrationDto: Dto) {
    const newNotification = {
      traceId: uuidv4(),
      data: registrationDto,
      state: State.NEW,
    };
    const status = this.repository.create(newNotification);
    console.log(`Udało się stworzyć następujące dane : ${registrationDto}`);
    return this.repository.save(status);
  }

  async getUser(){
    const user = await this.repository.find();

    console.log(user);


  }
}
