import { Result } from "#common/Result";
import { SaveForecastUseCase } from "#forecast/domain/usecases/save-forecast/SaveForecastUseCase";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

const saveForecastValidator = vine.compile(
  vine.object({
    user_id: vine.string(),
    match_id: vine.string(),
    score: vine.tuple([
      vine.number(),
      vine.number(),
    ])
  })
)


@inject()
export default class SaveForecastController {
  constructor(
    private saveForecastUseCase: SaveForecastUseCase
  ){}

  public async handle({ request, response }: HttpContext){
    const payload = await request.validateUsing(saveForecastValidator)

    const result = await this.saveForecastUseCase.execute({
      matchId: payload.match_id,
      userId: payload.user_id,
      score: payload.score
    })

    if(Result.isFail(result)){
      switch(result.error){
        case 'UserDontExistError':
          return response.status(400).json({
            message: `User does not exist`
          })
        case 'MatchDontExistError':
          return response.status(400).json({
            message: `Match does not exist`
          })
        case 'ScoreIsNotPossibleError':
          return response.status(400).json({
            message: `${payload.score[0]} - ${payload.score[1]} is not a possible score`
          })
        default:
          return response.status(400)
      }
    } else {
      return response.status(201)
    }
  }  
}