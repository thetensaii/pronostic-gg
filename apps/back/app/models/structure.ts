import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export class StructureModel extends BaseModel {
  static table = "structures"

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}