import { IResult, Result, ValueObject } from 'types-ddd';

export interface AuthenticationEmailProps {
  value: string;
}

export class AuthenticationEmail extends ValueObject<AuthenticationEmailProps> {
  private constructor(props: AuthenticationEmailProps) {
    super(props);
  }

  validation(value: string): boolean {
    return AuthenticationEmail.isValidProps({ value });
  }

  public static isValidProps({ value }: AuthenticationEmailProps): boolean {
    const { string } = this.validator;

    return string(value).hasLengthBetween(3, 30);
  }

  public static create(
    props: AuthenticationEmailProps
  ): IResult<AuthenticationEmail> {
    const message = 'name must have length min 3 and max 30 char';

    if (!this.isValidProps(props)) return Result.fail(message);

    return Result.Ok(new AuthenticationEmail(props));
  }
}

export default AuthenticationEmail;
