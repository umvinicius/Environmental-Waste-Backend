import factory from '@adonisjs/lucid/factories'
import State from '#models/state'

export const StateFactory = factory
  .define(State, async ({ faker }) => {
    return {}
  })
  .build()