import factory from '@adonisjs/lucid/factories'
import City from '#models/city'

export const CityFactory = factory
  .define(City, async ({ faker }) => {
    return {}
  })
  .build()