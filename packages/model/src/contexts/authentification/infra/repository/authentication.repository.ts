import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  deleteUser as deleteUserAuth,
  User,
} from '@firebase/auth';
import { firebaseAuth } from '../../../../shared/firebase';
import { FirebaseError } from '../../../../shared/firebase/error';

export const createUser = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    return await createUserWithEmailAndPassword(firebaseAuth, email, password);
  } catch (e) {
    throw new FirebaseError('createUser', e);
  }
};

export const signIn = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    return await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (e) {
    throw new FirebaseError('signIn', e);
  }
};

export const deleteUser = async (user: User): Promise<void> => {
  try {
    await deleteUserAuth(user);
  } catch (e) {
    throw new FirebaseError('deleteUser', e);
  }
};
