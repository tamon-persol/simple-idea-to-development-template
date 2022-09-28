import { IResult, Result } from 'rich-domain';
import * as userRepository from '@/contexts/indentity-access/infra/repository/user.repository';

export const createAnonymousUser = async (
  userId
): Promise<IResult<Boolean>> => {
  try {
    await userRepository.createAnonymousUser(userId);
    return Result.Ok(true);
  } catch (e) {
    return Result.fail(e);
  }
};
