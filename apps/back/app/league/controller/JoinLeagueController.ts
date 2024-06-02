import { Result } from "#common/Result";
import { JoinLeagueUseCase } from "#league/domain/usecases/join-league/JoinLeagueUseCase";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

const joinLeagueValidator = vine.compile(
  vine.object({
    user_id: vine.string(),
    league_id: vine.string()
  })
)

@inject()
export default class JoinLeagueController {

  constructor(private joinLeagueUseCase: JoinLeagueUseCase){}

  public async handle({request, response}: HttpContext) {
    const payload = await request.validateUsing(joinLeagueValidator)

    const result = await this.joinLeagueUseCase.execute({ userId: payload.user_id, leagueId: payload.league_id })
    
    if(Result.isFail(result)) {
      response.status(400)
    } else {
      response.status(200)
    }
  }
}