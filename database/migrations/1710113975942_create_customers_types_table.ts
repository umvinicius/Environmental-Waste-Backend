import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'customers_types'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('customer_id').references('id').inTable('customers').onDelete('CASCADE')
      table.integer('type_id').references('id').inTable('type_customers').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}