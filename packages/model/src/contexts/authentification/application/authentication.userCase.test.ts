import { login, register } from './authentication.useCase';

describe('authentication', () => {
  test('register', async () => {
    const result = await register('testable@lol.com', '123456');
    console.log(result);
  });

  test('test login', async () => {
    const result = await login('test@test.com', '123456');
    console.log(result);
  });
});
