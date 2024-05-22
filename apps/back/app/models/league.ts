import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { Forecaster } from '#models/forecaster'
import { type ManyToMany } from '@adonisjs/lucid/types/relations'

export class League extends BaseModel {
  static table = 'leagues'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name:string;

  @column()
  declare ownerId: number

  @column()
  declare competitionId: number

  @manyToMany(() => Forecaster)
  declare forecasters: ManyToMany<typeof Forecaster>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}