import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export class Forecast extends BaseModel {
  static table = "forecasts"

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare forecasterId: number

  @column()
  declare matchId: number

  @column()
  declare teamAScore: number

  @column()
  declare teamBScore: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}