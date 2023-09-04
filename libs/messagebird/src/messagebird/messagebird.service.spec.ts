import { Test, TestingModule } from '@nestjs/testing';
import { MessagebirdService } from './messagebird.service';

describe('MessagebirdService', () => {
  let service: MessagebirdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagebirdService],
    }).compile();

    service = module.get<MessagebirdService>(MessagebirdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
