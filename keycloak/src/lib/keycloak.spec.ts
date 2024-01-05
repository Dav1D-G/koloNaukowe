import { keycloak } from './keycloak';

describe('keycloak', () => {
  it('should work', () => {
    expect(keycloak()).toEqual('keycloak');
  });
});
