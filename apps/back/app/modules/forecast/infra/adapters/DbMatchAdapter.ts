import { Match } from '../../domain/Match.js'
import { MatchModel } from '#models/match'

export class DbMatchAdapter {
  toDomain(match: MatchModel): Match {
    return new Match({ id: match.id, startAt: match.startAt.toJSDate() })
  }
}
