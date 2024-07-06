import { CompetitionModel } from "#models/competition";
import { ForecastModel } from "#models/forecast";
import { MatchModel } from "#models/match";
import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

const getForecastsResultsValidator = vine.compile(
  vine.object({
    params: vine.object({
      competition_slug: vine.string(),
    })
  })
)

type ForecastResultDto = {
  match_id: string,
  start_at: string,
  teams: [string, string],
  score: [number, number],
  isForecastGood: boolean
}

export default class GetForecastsResultsController {
  public async handle({auth, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const payload = await request.validateUsing(getForecastsResultsValidator)


    const competition = await CompetitionModel.findBy('slug', payload.params.competition_slug)
    if(!competition){
      return response.status(404)
    }

    const endedMatches = await competition.related('matches').query().whereNotNull('score_a').andWhereNotNull('score_b') 
    const endedMatchesIds = endedMatches.map(m => m.id)
    const userForecasts = await ForecastModel.query().where('user_id', user.id).andWhereIn('match_id', endedMatchesIds)

    return await Promise.all(endedMatches.map(async (match) => this.convertMatchToForecastResultDto(match, userForecasts)))
  }

  private async convertMatchToForecastResultDto(match: MatchModel, userForecasts: ForecastModel[] ): Promise<ForecastResultDto> {
    await match.load('teamA')
    await match.load('teamB')

    const forecast = userForecasts.find(f => f.matchId === match.id) ?? null
    const matchScore: [number, number] = [match.scoreA, match.scoreB]
    const forecastScore: [number, number] | null = (forecast?.teamAScore == null || forecast?.teamBScore == null ) ? null : [forecast.teamAScore, forecast.teamBScore]
    
    return {
      match_id: match.id,
      start_at: match.startAt.toJSDate().toUTCString(),
      teams: [match.teamA.name, match.teamB.name],
      score: matchScore,
      isForecastGood: forecast ? this.isForecastGood(matchScore, forecastScore) : false
    }
  }

  private isForecastGood(matchScore: [number, number], forecastScore: [number, number] | null): boolean {
    if(!forecastScore) return false

    return matchScore[0] === forecastScore[0] && matchScore[1] === forecastScore[1]
  }
}