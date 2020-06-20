
exports.up = function(knex) {
  return knex.schema.createTable('produtos', function(table) {
      table.string('id').notNullable();
      table.string('nome').notNullable();
      table.decimal('valor_compra').notNullable();
      table.decimal('valor_venda').notNullable();
      table.integer('quantidade').notNullable();
      table.integer('status').notNullable();

      table.string('categoria_id').notNullable();
      table.foreign('categoria_id').references('id').inTable('categorias');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos');
};
