import * as firebaseRepository from '@/contexts/indentity-access/infra/repository/authentication.repository';
import AuthenticationRepositoryToAuthentication from '@/contexts/indentity-access/domain/authenticationRepositoryToAuthentication.adapter';
import { IResult, Result } from 'rich-domain';
import Authentication from '@/contexts/indentity-access/domain/authentication.entity';
import { firebaseAuth } from '@/model/shared/firebase';

export const createUser = async (
  email: string,
  password: string
): Promise<IResult<Authentication>> => {
  try {
    const userCredential = await firebaseRepository.createUser(email, password);
    const adapter = new AuthenticationRepositoryToAuthentication();
    return adapter.build(userCredential);
  } catch (e) {
    return Result.fail(e);
  }
};

export const signIn = async (
  email: string,
  password: string
): Promise<IResult<Authentication>> => {
  try {
    const userCredential = await firebaseRepository.signIn(email, password);
    const adapter = new AuthenticationRepositoryToAuthentication();
    return adapter.build(userCredential);
  } catch (e) {
    return Result.fail(e);
  }
};

export const deleteUser = async (): Promise<IResult<Boolean>> => {
  try {
    await firebaseRepository.deleteUser(firebaseAuth.currentUser);
    return Result.Ok(true);
  } catch (e) {
    return Result.fail(e);
  }
};
