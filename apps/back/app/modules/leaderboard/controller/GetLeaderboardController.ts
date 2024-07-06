import { CompetitionModel } from "#models/competition";
import { ForecastModel } from "#models/forecast";
import { LeagueModel } from "#models/league";
import { MatchModel } from "#models/match";
import { UserModel } from "#models/user";
import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

const getLeaderboardValidator = vine.compile(
  vine.object({
    params: vine.object({
      competition_slug: vine.string(),
      league_code: vine.string()
    })
  })
)

type Member = {
  username: string,
  points: number
}

type RankedMemberDto = Member & {
  rank: number
}


export default class GetLeaderboardController {

  public async handle({auth, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const payload = await request.validateUsing(getLeaderboardValidator)

    let competition: CompetitionModel
    let members: UserModel[]
    let leagueName: string

    if(payload.params.league_code === 'main'){
      const maybeCompetition = await CompetitionModel.findBy('slug', payload.params.competition_slug)
      if(!maybeCompetition){
        return response.status(404)
      }

      leagueName = "Global"
      competition = maybeCompetition
      members = await UserModel.all()
    } else {
      const league = await LeagueModel.findBy('code', payload.params.league_code)
      if(!league){
        return response.status(404)
      }
  
      await league.load('members')
      if(!league.members.map((m) => m.id).includes(user.id)){
        return response.status(403)
      }
      await league.load('competition')

      leagueName = league.name
      members = league.members
      competition = league.competition
    }

    const endedMatches = await competition.related('matches').query().whereNotNull('score_a').andWhereNotNull('score_b') 
    const membersPointsDto = await Promise.all(members.map((m) => this.computeMemberPoints(m, endedMatches)))

    const rankedMembers = this.computeRank(membersPointsDto)

    const rankedUser = rankedMembers.find(m => m.username === user.username)
    if(!rankedUser){
      return response.status(403)
    }

    return {
      league_name: leagueName,
      user : rankedUser,
      members: rankedMembers
    }

  }

  private async computeMemberPoints(member: UserModel, endedMatches: MatchModel[]): Promise<Member>{
    const endedMatchesIds = endedMatches.map(m => m.id)
    const forecasts = await ForecastModel.query().where('user_id', member.id).andWhereIn('match_id', endedMatchesIds)

    const points = endedMatches.reduce<number>((acc, currentMatch) => {
        const forecast = forecasts.find(f => f.matchId === currentMatch.id) ?? null
        if(!forecast) return acc
        if(forecast?.teamAScore == null || forecast?.teamBScore == null ) return acc

        if(forecast.teamAScore === currentMatch.scoreA && forecast.teamBScore === currentMatch.scoreB ) return acc + 1
        return acc
    }, 0)


    return {
      username: member.username,
      points: points
    }
  }

  private computeRank(memberPoints: Member[]) {
    const sortedMembers = memberPoints.sort((a, b) => b.points - a.points);

    const rankedMembers: RankedMemberDto[] = [];
    let currentRank = 1;
    let currentPoints = sortedMembers[0].points;

    for (let i = 0; i < sortedMembers.length; i++) {
        if (sortedMembers[i].points < currentPoints) {
            currentRank = i + 1;
            currentPoints = sortedMembers[i].points;
        }
        rankedMembers.push({ ...sortedMembers[i], rank: currentRank });
    }

    return rankedMembers
  }
}