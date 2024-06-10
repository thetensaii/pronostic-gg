export const CreateLeagueErrors = {
  UserDontExistError: 'UserDontExistError',
  CompetitionDontExistError: 'CompetitionDontExistError',
} as const

export type CreateLeagueErrors = keyof typeof CreateLeagueErrors
