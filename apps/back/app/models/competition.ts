import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { type ManyToMany } from '@adonisjs/lucid/types/relations';
import { Team } from "#models/team"
 
export class Competition extends BaseModel {
  static table = "competitions"

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name:string

  @column()
  declare slug:string

  @column()
  declare gameId: number;

  @manyToMany(() => Team)
  declare teams: ManyToMany<typeof Team>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}