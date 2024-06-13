import { Result } from "#common/Result";
import { JoinLeagueUseCase } from "../domain/usecases/join-league/JoinLeagueUseCase.js";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

const joinLeagueValidator = vine.compile(
  vine.object({
    user_id: vine.string(),
    league_code: vine.string()
  })
)

@inject()
export default class JoinLeagueController {

  constructor(private joinLeagueUseCase: JoinLeagueUseCase){}

  public async handle({request, response}: HttpContext) {
    const payload = await request.validateUsing(joinLeagueValidator)

    const result = await this.joinLeagueUseCase.execute({ userId: payload.user_id, leagueCode: payload.league_code })
    
    if(Result.isFail(result)) {
      switch(result.error){
        case 'LeagueAlreadyJoinedError':
          return response.status(400).json({ message: "Vous êtes déjà dans cette ligue."})
        case 'LeagueDontExistError':
          return response.status(400).json({ message: "Code non valide."})
        default:
          return response.status(400)
      }
    } else {
      return response.status(200)
    }
  }
}