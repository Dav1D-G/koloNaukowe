import { Test, TestingModule } from '@nestjs/testing';
import { DbModuleService } from './db-module.service';

describe('DbModuleService', () => {
  let service: DbModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbModuleService],
    }).compile();

    service = module.get<DbModuleService>(DbModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
