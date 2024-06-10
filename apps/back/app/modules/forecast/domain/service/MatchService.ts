import { Match } from "../Match.js";

export abstract class MatchService {
  abstract find:(matchId: string) => Promise<Match | null>
}