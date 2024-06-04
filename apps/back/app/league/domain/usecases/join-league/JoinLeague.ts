import { Result, ResultType } from "#common/Result";
import { LeagueRepository } from "#league/domain/repositories/LeagueRepository";
import { UserService } from "#league/domain/services/UserService";
import { inject } from "@adonisjs/core";
import { JoinLeagueErrors } from "./JoinLeagueErrors.js";
import { JoinLeagueDto, JoinLeagueUseCase } from "./JoinLeagueUseCase.js";

@inject()
export class JoinLeague implements JoinLeagueUseCase {
  constructor(
    private userRepository: UserService,
    private leagueRepository: LeagueRepository
  ){}

  public async execute(joinLeagueDto: JoinLeagueDto): Promise<ResultType<null, JoinLeagueErrors>> {
    const user = await this.userRepository.find(joinLeagueDto.userId)
    if(!user){
      return Result.fail(JoinLeagueErrors.UserDontExistError)
    }

    const league = await this.leagueRepository.find(joinLeagueDto.leagueId)
    if(!league){
      return Result.fail(JoinLeagueErrors.LeagueDontExistError)
    }
    
    const hasJoined = league.join(user)
    if(!hasJoined){
      return Result.fail(JoinLeagueErrors.LeagueAlreadyJoinedError)
    }

    this.leagueRepository.save(league)

    return Result.success(null)
  }
}