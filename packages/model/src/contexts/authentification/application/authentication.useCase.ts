import { signInWithEmailAndPassword } from '@firebase/auth';
import { firebaseAuth } from '../../../shared/firebase';
import * as firebaseRepository from '../infra/repository/authentication.repository';
import AuthenticationRepositoryToAuthentication from '../domain/authenticationRepositoryToAuthentication.adapter';
import { IResult, Result } from 'types-ddd';
import Authentication from '../domain/authentication.entity';

export const register = async (
  email: string,
  password: string
): Promise<IResult<Authentication>> => {
  try {
    const userCredential = await firebaseRepository.register(email, password);
    const adapter = new AuthenticationRepositoryToAuthentication();
    return adapter.build(userCredential);
  } catch (e) {
    return Result.fail(e);
  }
};

export const login = async (
  email: string,
  password: string
): Promise<IResult<Authentication>> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const adapter = new AuthenticationRepositoryToAuthentication();
    return adapter.build(userCredential);
  } catch (e) {
    return Result.fail(e);
  }
};
