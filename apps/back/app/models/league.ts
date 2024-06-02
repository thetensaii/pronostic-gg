import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export class LeagueModel extends BaseModel {
  static table = 'leagues'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name:string;

  @column()
  declare ownerId: string

  @column()
  declare competitionId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}