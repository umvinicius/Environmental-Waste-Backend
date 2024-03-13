import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('username').notNullable().unique()
      table.string('cpf').notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.boolean('change_password').defaultTo(false)
      table.boolean('notification_email').defaultTo(true)
      table.boolean('notification_real_time').defaultTo(true)
      table.integer('customer_id').references('id').inTable('customers').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
