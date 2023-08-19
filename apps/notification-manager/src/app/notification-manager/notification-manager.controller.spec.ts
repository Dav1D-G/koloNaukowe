import { Test, TestingModule } from '@nestjs/testing';
import { NotificationManagerController } from './notification-manager.controller';

describe('NotificationManagerController', () => {
  let controller: NotificationManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationManagerController],
    }).compile();

    controller = module.get<NotificationManagerController>(NotificationManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
