import factory from '@adonisjs/lucid/factories'
import Contact from '#models/contact'

export const ContactFactory = factory
  .define(Contact, async ({ faker }) => {
    return {}
  })
  .build()