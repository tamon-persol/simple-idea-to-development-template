import { createUser, signIn, deleteUser } from './authentication.repository';
import { firebaseAuth } from '@/model/shared/firebase';

const testUserAccountWithValidCredential = {
  email: 'user-for-test@test.com',
  password: '123456',
};

describe('authentication', () => {
  test('with valid credential', async () => {
    const userAuth = await createUser(
      testUserAccountWithValidCredential.email,
      testUserAccountWithValidCredential.password
    );
    expect(userAuth.user.email).toBe(testUserAccountWithValidCredential.email);

    let loginUser = await signIn(
      testUserAccountWithValidCredential.email,
      testUserAccountWithValidCredential.password
    );
    const token = await firebaseAuth.currentUser.getIdToken();
    expect(token).toBe(await loginUser.user.getIdToken());
    expect(loginUser.user.email).toBe(testUserAccountWithValidCredential.email);

    await deleteUser(firebaseAuth.currentUser);
    const callSignIn = signIn(
      testUserAccountWithValidCredential.email,
      testUserAccountWithValidCredential.password
    );
    await expect(callSignIn).rejects.toThrow();
  });
});
