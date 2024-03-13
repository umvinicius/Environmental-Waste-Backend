import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'access_rules_users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('access_rule_id').references('id').inTable('access_rules').onDelete('CASCADE')
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}