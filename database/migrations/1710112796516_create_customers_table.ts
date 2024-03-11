import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'customers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('fantasy_name', 255).nullable()
      table.enum('user_type', ['pf', 'pj']).defaultTo('pj')
      table.string('cpf_cnpj', 20).unique().nullable()
      table.string('rg_ie').nullable()
      table.enum('taxpayer', ['0', '1', '2', '9']).defaultTo('0').nullable()
      /*
        0 - Não Informado
        1 - Contribuinte ICMS
        2 - Contribuinte isento de Inscrição no cadastro de Contribuintes do ICMS
        9 - Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes do ICMS
      */
      table.string('municipal_registration').nullable()

      table.string('zip_code', 15).nullable()
      table.uuid('city_id').references('id').inTable('cities').onDelete('CASCADE')
      table.uuid('state_id').references('id').inTable('states').onDelete('CASCADE')
      table.string('address', 255).nullable()
      table.string('district', 200).nullable()
      table.string('number', 50).nullable()
      table.text('complement').nullable()
      table.boolean('billing_address').defaultTo(false)
      table.string('phone', 20).nullable()
      table.string('additional_phone', 20).nullable()
      table.string('cell_phone', 20).nullable()
      table.string('email', 255).nullable()
      table.text('contact_notes').nullable()
      table.uuid('customer_id').references('id').inTable('customers').onDelete('CASCADE')
      table.boolean('active').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}