import { IResult, Result, ValueObject } from 'rich-domain';

export interface Props {
  value: string;
}

export class Name extends ValueObject<Props> {
  private constructor(props: Props) {
    super(props);
  }

  public static isValidProps({ value }: Props): boolean {
    const { string } = this.validator;

    return !string(value).isEmpty();
  }

  public static create(value: string): IResult<Name> {
    const message = 'value should be a boolean';

    if (!this.isValidProps({ value })) return Result.fail(message);

    return Result.Ok(new Name({ value }));
  }

  validation(value: string): boolean {
    return Name.isValidProps({ value });
  }
}

export default Name;
