import { Entity, IResult, Result, UID } from 'types-ddd';
import AuthenticationEmail from './authentication-email.value-object';

interface AuthenticationProps {
  id?: UID;
  email: AuthenticationEmail;
}
export class Authentication extends Entity<AuthenticationProps> {
  private constructor(props: AuthenticationProps) {
    super(props);
  }

  public static create(props: AuthenticationProps): IResult<Authentication> {
    return Result.Ok(new Authentication(props));
  }
}

export default Authentication;
