import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Contact from './contact.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import State from './state.js'
import City from './city.js'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare fantasyName: string

  @column()
  declare userType: string

  @column({
    consume: (value: any) => Customer.consumeIsNull(value),
  })
  declare cpfCnpj: number | string

  @column()
  declare rgIe: string | string

  @column()
  declare taxpayer: string

  @column()
  declare municipalRegistration: string | number

  @column({
    consume: (value: any) => Customer.consumeIsNull(value),
  })
  declare zipCode: string

  @column()
  declare cityId: number | string

  @column()
  declare stateId: number | string

  @column()
  declare address: string

  @column()
  declare district: string

  @column()
  declare number: string

  @column()
  declare complement: string

  @column()
  declare billingAddress: string

  @column({
    consume: (value: string | number) => Customer.consumeIsNull(value),
  })
  declare phone: string

  @column({
    consume: (value: string | number) => Customer.consumeIsNull(value),
  })
  declare additionalPhone: string

  @column({
    consume: (value: string | number) => Customer.consumeIsNull(value),
  })
  declare cellPhone: string

  @column()
  declare email: string

  @column()
  declare contactNotes: string

  @column()
  declare customerId: string | null

  @column()
  declare active: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Contact)
  declare contacts: HasMany<typeof Contact>

  @belongsTo(() => State)
  declare state: BelongsTo<typeof State>

  @belongsTo(() => City)
  declare city: BelongsTo<typeof City>

  static consumeIsNull(value: any) {
    if (value === null) {
      return ''
    }
    return String(value)
  }
}
