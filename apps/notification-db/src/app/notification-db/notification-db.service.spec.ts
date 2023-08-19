import { Test, TestingModule } from '@nestjs/testing';
import { NotificationDbService } from './notification-db.service';

describe('NotificationDbService', () => {
  let service: NotificationDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationDbService],
    }).compile();

    service = module.get<NotificationDbService>(NotificationDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
