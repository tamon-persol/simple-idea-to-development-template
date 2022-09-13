import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from '@firebase/auth';
import { firebaseAuth } from '../../../../shared/firebase';

export const register = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    return await createUserWithEmailAndPassword(firebaseAuth, email, password);
  } catch (e) {
    console.log(e);
  }
};

export const login = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    return await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (e) {
    console.log(e);
  }
};
