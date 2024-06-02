import { Match } from "../Match.js";

export abstract class MatchRepository {
  abstract find:(matchId: string) => Promise<Match | null>
}