import { CompetitionModel } from "#models/competition";
import { ForecastModel } from "#models/forecast";
import { MatchModel } from "#models/match";
import { UserModel } from "#models/user";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

const getNextForecastsValidator = vine.compile(
  vine.object({
    user_id: vine.string(),
    params : vine.object({
      competition_slug: vine.string(),
    })
  })
)

type ForecastDto = {
  match_id: string,
  start_at: string,
  teams: [string, string],
  score: [number, number] | null,
}

@inject()
export default class GetNextForecastsController {

  public async handle({ request, response }: HttpContext) {
    const payload = await request.validateUsing(getNextForecastsValidator)

    const user = await UserModel.find(payload.user_id)
    if(!user){
      return response.status(401)
    }

    const competition = await CompetitionModel.findBy('slug', payload.params.competition_slug)
    if(!competition){
      return response.status(401)
    }
    
    await competition.load('matches')
    const matchesIds = competition.matches.map(m => m.id)
    const userForecasts = await ForecastModel.query().where('user_id', user.id).andWhereIn('match_id', matchesIds)

    return await Promise.all(competition.matches.map(async (match) => this.convertMatchToForecastDto(match, userForecasts)))
  }

  private async convertMatchToForecastDto(match: MatchModel, userForecasts: ForecastModel[] ): Promise<ForecastDto> {
    await match.load('teamA')
    await match.load('teamB')

    const forecast = userForecasts.find(f => f.matchId === match.id) ?? null

    return {
      match_id: match.id,
      start_at: match.startAt.toJSDate().toUTCString(),
      teams: [match.teamA.name, match.teamB.name],
      score: forecast ? [forecast.teamAScore, forecast.teamBScore] : null
    }
  }
}