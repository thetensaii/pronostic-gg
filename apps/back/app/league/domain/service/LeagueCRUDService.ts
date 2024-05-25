import { League } from "#league/domain/League";

export type CreateLeagueDto = {
  ownerId: number,
  competitionId:number,
  name:string,
}

export abstract class LeagueCRUDService {
  abstract create(league: CreateLeagueDto): Promise<NonNullable<League['id']>>
}