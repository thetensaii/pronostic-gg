import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { MatchModel } from './match.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export class ForecastModel extends BaseModel {
  static table = 'forecasts'

  @column({ isPrimary: true })
  declare userId: string

  @column({ isPrimary: true })
  declare matchId: string

  @belongsTo(() => MatchModel, {
    foreignKey: 'matchId',
  })
  declare match: BelongsTo<typeof MatchModel>

  @column()
  declare teamAScore: number

  @column()
  declare teamBScore: number

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}
