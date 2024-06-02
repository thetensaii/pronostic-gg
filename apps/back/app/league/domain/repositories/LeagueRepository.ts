import { League } from "../League.js";

export abstract class LeagueRepository {
  abstract save(league: League): Promise<void>
}