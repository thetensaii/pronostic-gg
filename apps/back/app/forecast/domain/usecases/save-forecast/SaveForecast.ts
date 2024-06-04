import { Result, ResultType } from "#common/Result";
import { inject } from "@adonisjs/core";
import { ForecastFactory } from "../../ForecastFactory.js";
import { ForecastRepository } from "../../repositories/ForecastRepository.js";
import { MatchService } from "../../service/MatchService.js";
import { UserService } from "../../service/UserService.js";
import { SaveForecastErrors } from "./SaveForecastErrors.js";
import { SaveForecastDto, SaveForecastUseCase } from "./SaveForecastUseCase.js";

@inject()
export class SaveForecast implements SaveForecastUseCase {

  constructor(
    private userService: UserService,
    private matchService: MatchService,
    private forecastFactory: ForecastFactory,
    private forecastRepository: ForecastRepository
  ) {}

  public async execute(saveForecastDto: SaveForecastDto): Promise<ResultType<null, SaveForecastErrors>> {
    const { userId, matchId, score } = saveForecastDto

    const user = await this.userService.find(userId)
    if(!user){
      return Result.fail(SaveForecastErrors.UserDontExistError)
    }

    const match = await this.matchService.find(matchId)
    if(!match){
      return Result.fail(SaveForecastErrors.MatchDontExistError)
    }

    let forecast = await this.forecastRepository.find({ userId: user.id, matchId: match.id})
    if(!forecast) {
      forecast = this.forecastFactory.create({ user, match, score })
    } else {
      forecast.setScore(score)
    }

    await this.forecastRepository.save(forecast)

    return Result.success(null)
  }
}