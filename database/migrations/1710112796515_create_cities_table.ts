import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('state_id').references('id').inTable('states').onDelete('CASCADE')
      table.string('title')
      table.integer('iso')
      table.integer('iso_ddd')
      table.integer('status')
      table.string('slug')
      table.decimal('lat', 12, 8)
      table.decimal('long', 12, 8)
      table.decimal('income_per_capita', 12, 8)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}