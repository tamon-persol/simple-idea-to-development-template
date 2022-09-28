import { createAnonymousUser } from '@/contexts/indentity-access/infra/repository/user.repository';

describe('user Repository', () => {
  it('should add user', async () => {
    await createAnonymousUser('12123');
  });
});
