import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import { TeamModel } from '#models/team'

export class MatchModel extends BaseModel {
  static table = "matches"

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare competitionId: string

  @column.dateTime()
  declare startAt: DateTime

  @column()
  declare teamAId: string

  @belongsTo(() => TeamModel)
  declare teamA: BelongsTo<typeof TeamModel>

  @column()
  declare teamBId: string

  @belongsTo(() => TeamModel)
  declare teamB: BelongsTo<typeof TeamModel>

  @column()
  declare scoreA: number

  @column()
  declare scoreB: number


  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}