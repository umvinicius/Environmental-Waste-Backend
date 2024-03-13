import factory from '@adonisjs/lucid/factories'
import AccessRule from '#models/access_rule'

export const AccessRuleFactory = factory
  .define(AccessRule, async ({ faker }) => {
    return {}
  })
  .build()