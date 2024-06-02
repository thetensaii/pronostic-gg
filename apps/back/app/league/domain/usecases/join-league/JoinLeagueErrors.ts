export const JoinLeagueErrors = {
  UserDontExistError: 'UserDontExistError',
  LeagueDontExistError: 'LeagueDontExistError',
  LeagueAlreadyJoinedError: 'LeagueAlreadyJoinedError',
} as const

export type JoinLeagueErrors = keyof typeof JoinLeagueErrors
