import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class City extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare stateId: number | string

  @column()
  declare title: string

  @column()
  declare iso: number | string

  @column()
  declare isoDdd: number | string

  @column()
  declare status: number | string

  @column()
  declare slug: string

  @column()
  declare lat: number | string

  @column()
  declare long: number | string

  @column()
  declare incomePerCapita: number | string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}