import { IAdapter, ID, IResult, Result } from 'rich-domain';
import { UserCredential } from '@firebase/auth';
import Authentication from './authentication.entity';
import IsLogged from '@/contexts/indentity-access/domain/isLogged.value-object';

export class AuthenticationRepositoryToAuthentication
  implements IAdapter<UserCredential, Authentication>
{
  build(target: UserCredential): IResult<Authentication> {
    const isLogged = IsLogged.create(Boolean(target.user));
    if (isLogged.isFail()) {
      return Result.fail(isLogged.error());
    }

    return Authentication.create({
      id: ID.create(target.user.getIdToken()),
      isLogged: isLogged.value(),
    });
  }
}

export default AuthenticationRepositoryToAuthentication;
