import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export class ForecastModel extends BaseModel {
  static table = "forecasts"


  @column({ isPrimary: true })
  declare userId: string

  @column({ isPrimary: true })
  declare matchId: string

  @column()
  declare teamAScore: number

  @column()
  declare teamBScore: number

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}