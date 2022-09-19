import { IResult, Result, ValueObject } from 'rich-domain';

export interface Props {
  value: boolean;
}

export class IsLogged extends ValueObject<Props> {
  private constructor(props: Props) {
    super(props);
  }

  validation(value: boolean): boolean {
    return IsLogged.isValidProps({ value });
  }

  public static isValidProps({ value }: Props): boolean {
    const { isBoolean } = this.validator;

    return isBoolean(value);
  }

  public static create(value: boolean): IResult<IsLogged> {
    const message = 'value should be a boolean';

    if (!this.isValidProps({ value })) return Result.fail(message);

    return Result.Ok(new IsLogged({ value }));
  }
}

export default IsLogged;
