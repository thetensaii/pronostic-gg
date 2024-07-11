import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export class GameModel extends BaseModel {
  static table = 'games'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}
