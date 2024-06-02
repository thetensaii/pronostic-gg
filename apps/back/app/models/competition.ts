import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { type ManyToMany } from '@adonisjs/lucid/types/relations';
import { TeamModel } from "#models/team"
 
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

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}