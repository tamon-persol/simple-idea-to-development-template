import { login } from './authentication.repository';

describe('authentication', () => {
  test('register', async () => {});

  test('test login', async () => {
    const result = await login('test@test.com', '123456');
    console.log(result.user);
  });
});
