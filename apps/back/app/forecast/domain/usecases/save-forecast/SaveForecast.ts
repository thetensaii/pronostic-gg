import { Result, ResultType } from "#common/Result";
import { inject } from "@adonisjs/core";
import { ForecastRepository } from "../../repositories/ForecastRepository.js";
import { MatchService } from "../../service/MatchService.js";
import { UserService } from "../../service/UserService.js";
import { SaveForecastDto, SaveForecastErrors, SaveForecastUseCase } from "./SaveForecastUseCase.js";
import { Forecast } from "#forecast/domain/Forecast";
import { UserDontExistError } from "#forecast/domain/errors/UserDontExistError";
import { MatchDontExistError } from "#forecast/domain/errors/MatchDontExistError";

@inject()
export class SaveForecast implements SaveForecastUseCase {

  constructor(
    private userService: UserService,
    private matchService: MatchService,
    private forecastRepository: ForecastRepository
  ) {}

  public async execute(saveForecastDto: SaveForecastDto): Promise<ResultType<null, SaveForecastErrors>> {
    const { userId, matchId, score } = saveForecastDto

    const user = await this.userService.find(userId)
    if(!user){
      return Result.fail(UserDontExistError)
    }

    const match = await this.matchService.find(matchId)
    if(!match){
      return Result.fail(MatchDontExistError)
    }

    let forecast = await this.forecastRepository.find({ userId: user.id, matchId: match.id})
    if(!forecast) {
      const result = Forecast.create({ user, match, score })
      if(Result.isFail(result)) return result
      forecast = result.value
    } else {
      const result = forecast.setScore(score)
      if(Result.isFail(result)) return result
    }

    await this.forecastRepository.save(forecast)

    return Result.success(null)
  }
}