import { Result, ResultType } from '#common/Result'
import { LeagueRepository } from '../../repositories/LeagueRepository.js'
import { UserService } from '../../services/UserService.js'
import { inject } from '@adonisjs/core'
import { JoinLeagueDto, JoinLeagueErrors, JoinLeagueUseCase } from './JoinLeagueUseCase.js'
import { UserDontExistError } from '#league/domain/errors/UserDontExistError'
import { LeagueDontExistError } from '#league/domain/errors/LeagueDontExistError'
import { LeagueAlreadyJoinedError } from '#league/domain/errors/LeagueAlreadyJoinedError'

@inject()
export class JoinLeague implements JoinLeagueUseCase {
  constructor(
    private userService: UserService,
    private leagueRepository: LeagueRepository
  ) {}

  async execute(joinLeagueDto: JoinLeagueDto): Promise<ResultType<null, JoinLeagueErrors>> {
    const user = await this.userService.find(joinLeagueDto.userId)
    if (!user) {
      return Result.fail(UserDontExistError)
    }

    const league = await this.leagueRepository.findByCode(joinLeagueDto.leagueCode)
    if (!league) {
      return Result.fail(LeagueDontExistError)
    }

    const hasJoined = league.join(user)
    if (!hasJoined) {
      return Result.fail(LeagueAlreadyJoinedError)
    }

    this.leagueRepository.save(league)

    return Result.success(null)
  }
}
