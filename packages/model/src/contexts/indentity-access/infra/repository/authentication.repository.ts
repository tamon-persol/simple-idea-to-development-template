import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  deleteUser as deleteUserAuth,
  User,
} from '@firebase/auth';
import { firebaseAuth } from '@/model/shared/firebase';
import { FirebaseError } from '@/model/shared/firebase/error';

export const createUser = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    return await createUserWithEmailAndPassword(firebaseAuth, email, password);
  } catch (e) {
    throw new FirebaseError('AuthRepo: createUser', e);
  }
};

export const signIn = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    return await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (e) {
    throw new FirebaseError('AuthRepo: signIn', e);
  }
};

export const deleteUser = async (user: User): Promise<void> => {
  try {
    await deleteUserAuth(user);
  } catch (e) {
    throw new FirebaseError('AuthRepo: deleteUser', e);
  }
};
