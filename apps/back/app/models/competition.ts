import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations';
import { TeamModel } from "#models/team"
import { MatchModel } from './match.js';
 
export class CompetitionModel extends BaseModel {
  static table = "competitions"

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name:string

  @column()
  declare slug:string

  @column()
  declare gameId: string;

  @manyToMany(() => TeamModel)
  declare teams: ManyToMany<typeof TeamModel>

  @hasMany(() => MatchModel, {
    foreignKey: 'competitionId', // defaults to userId
  })
  declare matches: HasMany<typeof MatchModel>

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}