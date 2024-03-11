import factory from '@adonisjs/lucid/factories'
import TypeCustomer from '#models/type_customer'

export const TypeCustomerFactory = factory
  .define(TypeCustomer, async ({ faker }) => {
    return {}
  })
  .build()