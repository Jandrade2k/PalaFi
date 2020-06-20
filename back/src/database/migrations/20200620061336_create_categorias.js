
exports.up = function(knex) {
  return knex.schema.createTable('categorias', function(table) {
      table.string('id').notNullable();
      table.string('nome').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.droptable('categorias');
};
