import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import { TeamModel } from '#models/team'

export class MatchModel extends BaseModel {
  static table = "matches"

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare competitionId: number

  @column.dateTime()
  declare startAt: DateTime

  @column()
  declare teamAId: number

  @belongsTo(() => TeamModel)
  declare teamA: BelongsTo<typeof TeamModel>

  @column()
  declare teamBId: number

  @belongsTo(() => TeamModel)
  declare teamB: BelongsTo<typeof TeamModel>

  @column()
  declare scoreA: number

  @column()
  declare scoreB: number


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}