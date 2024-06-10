import { CompetitionModel } from "#models/competition";

type CompetitionDto = {
  id: string,
  name: string,
  slug: string,
}



export default class GetAllCompetitionsController {
  public async handle(): Promise<CompetitionDto[]> {
    const competitions = await CompetitionModel.all()

    return competitions.map(c => ({
      id: c.id,
      name: c.name,
      slug: c.slug
    }))
  }
}