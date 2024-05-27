import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { ForecasterModel } from '#models/forecaster'
import { type ManyToMany } from '@adonisjs/lucid/types/relations'

export class LeagueModel extends BaseModel {
  static table = 'leagues'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name:string;

  @column()
  declare ownerId: string

  @column()
  declare competitionId: number

  @manyToMany(() => ForecasterModel)
  declare forecasters: ManyToMany<typeof ForecasterModel>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}