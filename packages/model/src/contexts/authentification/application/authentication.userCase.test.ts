import { signIn, createUser, deleteUser } from './authentication.useCase';

describe('authentication useCase', () => {
  test('Valid data', async () => {
    const validCredential = {
      email: 'testable@lol.com',
      password: '123456',
    };
    const resultCreate = await createUser(
      validCredential.email,
      validCredential.password
    );
    expect(resultCreate.isOk()).toBeTruthy();

    const resultSignIn = await signIn(
      validCredential.email,
      validCredential.password
    );
    expect(resultSignIn.isOk()).toBeTruthy();

    const resultDeleteUser = await deleteUser();
    expect(resultDeleteUser.isOk()).toBeTruthy();
  });
});
