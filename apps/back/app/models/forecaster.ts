import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export class Forecaster extends BaseModel {
  static table = "forecasters"

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}