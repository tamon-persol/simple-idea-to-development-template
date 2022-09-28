import { Entity, IResult, Result, UID } from 'rich-domain';
import Name from '@/contexts/indentity-access/domain/value-objects/name.value-object';

interface UserProps {
  id?: UID;
  name?: Name;
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps) {
    super(props);
  }

  public static create(props: UserProps): IResult<User> {
    return Result.Ok(new User(props));
  }
}

export default User;
