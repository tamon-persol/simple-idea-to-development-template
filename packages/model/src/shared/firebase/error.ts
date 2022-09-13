class BaseError extends Error {
  public readonly name: string;
  public readonly isOperational: boolean;

  constructor(name: string, description: string, isOperational: boolean) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

export class FirebaseError extends BaseError {
  constructor(
    name,
    description = 'internal server error',
    isOperational = true
  ) {
    super(`FirebaseError ${name}`, description, isOperational);
  }
}
