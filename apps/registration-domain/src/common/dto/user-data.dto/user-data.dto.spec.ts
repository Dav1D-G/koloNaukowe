import { UserDataDto } from './user-data.dto';

describe('UserDataDto', () => {
  it('should be defined', () => {
    expect(new UserDataDto()).toBeDefined();
  });
});
