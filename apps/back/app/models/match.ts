import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import { Team } from '#models/team'

export default class Match extends BaseModel {
  static table = "matches"

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare competitionId: number

  @column.dateTime()
  declare startAt: DateTime

  @column()
  declare teamAId: number

  @belongsTo(() => Team)
  declare teamA: BelongsTo<typeof Team>

  @column()
  declare teamBId: number

  @belongsTo(() => Team)
  declare teamB: BelongsTo<typeof Team>

  @column()
  declare scoreA: number

  @column()
  declare scoreB: number


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}