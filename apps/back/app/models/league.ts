import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class League extends BaseModel {
  static table = 'legues'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare ownerId: number

  @column()
  declare competitionId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}