import { Entity, IResult, Result, UID } from 'rich-domain';
import IsLogged from '@/contexts/indentity-access/domain/value-objects/isLogged.value-object';

interface AuthenticationProps {
  id?: UID;
  isLogged: IsLogged;
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
