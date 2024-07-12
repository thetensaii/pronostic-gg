import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export class TeamModel extends BaseModel {
  static table = 'teams'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare structureId: string

  @column()
  declare name: string

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}
