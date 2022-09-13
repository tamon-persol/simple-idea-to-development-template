import { IAdapter, ID, IResult, Result } from 'types-ddd';
import { UserCredential } from '@firebase/auth';
import Authentication from './authentication.entity';
import AuthenticationEmail from './authentication-email.value-object';

export class AuthenticationRepositoryToAuthentication
  implements IAdapter<UserCredential, Authentication>
{
  build(target: UserCredential): IResult<Authentication> {
    const email = AuthenticationEmail.create({
      value: target.user.email,
    });
    if (email.isFail()) {
      return Result.fail(email.error());
    }

    return Authentication.create({
      id: ID.create(target.user.getIdToken()),
      email: email.value(),
    });
  }
}

export default AuthenticationRepositoryToAuthentication;
