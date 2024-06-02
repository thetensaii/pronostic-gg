export const SaveForecastErrors = {
  UserDontExistError: 'UserDontExistError',
  MatchDontExistError: 'MatchDontExistError',
} as const

export type SaveForecastErrors = keyof typeof SaveForecastErrors

