export type SuccessResultType<T extends unknown> = {
  status: 'success'
  value: T
}

export type FailResultType<T extends unknown> = {
  status: 'fail'
  error: T
}

export type ResultType<TValue extends unknown, TError extends unknown> =
  | SuccessResultType<TValue>
  | FailResultType<TError>

export class Result {
  static success<T extends unknown>(value: T): SuccessResultType<T> {
    return {
      status: 'success',
      value: value,
    }
  }

  static fail<T extends unknown>(error: T): FailResultType<T> {
    return {
      status: 'fail',
      error: error,
    }
  }

  static isFail<TValue extends unknown = unknown, TError extends unknown = unknown>(
    result: ResultType<TValue, TError>
  ): result is FailResultType<TError> {
    return result.status === 'fail'
  }
}
