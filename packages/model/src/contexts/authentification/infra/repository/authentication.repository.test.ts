import { createUser, signIn, deleteUser } from './authentication.repository';
import { firebaseAuth } from '../../../../shared/firebase';
import { FirebaseError } from '../../../../shared/firebase/error';

const testUserAccountWithValidCredetial = {
  email: 'user-for-test@test.com',
  password: '123456',
};

describe('authentication', () => {
  test('with valid credential', async () => {
    const userAuth = await createUser(
      testUserAccountWithValidCredetial.email,
      testUserAccountWithValidCredetial.password
    );
    expect(userAuth.user.email).toBe(testUserAccountWithValidCredetial.email);

    let loginUser = await signIn(
      testUserAccountWithValidCredetial.email,
      testUserAccountWithValidCredetial.password
    );
    const token = await firebaseAuth.currentUser.getIdToken();
    expect(token).toBe(await loginUser.user.getIdToken());
    expect(loginUser.user.email).toBe(testUserAccountWithValidCredetial.email);

    await deleteUser(firebaseAuth.currentUser);
    const callSignIn = signIn(
      testUserAccountWithValidCredetial.email,
      testUserAccountWithValidCredetial.password
    );
    await expect(callSignIn).rejects.toThrow();
  });
});
