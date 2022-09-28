import * as authRepository from '@/contexts/indentity-access/infra/repository/authentication.repository';
import AuthenticationRepositoryToAuthentication from '@/contexts/indentity-access/domain/adapters/authenticationRepositoryToAuthentication.adapter';
import { IResult, Result } from 'rich-domain';
import Authentication from '@/contexts/indentity-access/domain/entities/authentication.entity';
import { firebaseAuth } from '@/model/shared/firebase';

export const createAuth = async (
  email: string,
  password: string
): Promise<IResult<Authentication>> => {
  try {
    const userCredential = await authRepository.createAuth(email, password);
    const adapter = new AuthenticationRepositoryToAuthentication();
    return adapter.build(userCredential);
  } catch (e) {
    return Result.fail(e);
  }
};

export const signIn = async (
  email: string,
  password: string
): Promise<IResult<Boolean>> => {
  try {
    await authRepository.signIn(email, password);
    return Result.Ok(true);
  } catch (e) {
    return Result.fail(e);
  }
};

export const deleteAuth = async (): Promise<IResult<Boolean>> => {
  try {
    await authRepository.deleteAuth(firebaseAuth.currentUser);
    return Result.Ok(true);
  } catch (e) {
    return Result.fail(e);
  }
};
