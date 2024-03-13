import factory from '@adonisjs/lucid/factories'
import NameAccessRule from '#models/name_access_rule'

export const NameAccessRuleFactory = factory
  .define(NameAccessRule, async ({ faker }) => {
    return {}
  })
  .build()