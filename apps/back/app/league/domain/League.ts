export type LeagueProps = {
  id?: number,
  ownerId: number,
  competitionId:number,
  name:string,
}

export class League {

  public id?: number
  public ownerId: number
  public competitionId:number
  public name:string

  constructor(props: LeagueProps){
    this.id = props.id
    this.ownerId = props.ownerId
    this.competitionId = props.competitionId
    this.name = props.name
  }
}