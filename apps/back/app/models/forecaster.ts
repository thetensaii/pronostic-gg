import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export class ForecasterModel extends BaseModel {
  static table = "forecasters"

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare username: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}