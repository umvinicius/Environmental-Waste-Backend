import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'states'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('title')
      table.string('letter')
      table.string('iso')
      table.string('slug')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}