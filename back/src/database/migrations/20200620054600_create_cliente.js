
exports.up = function(knex) {
  return knex.schema.createTable('clientes', function (table) {
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('cpf').notNullable();
      table.string('telefone');
      table.string('celular');
      table.boolean('whatsapp').notNullable();
      table.string('cep').notNullable();
      table.string('endereco').notNullable();
      table.string('numero').notNullable();
      table.string('complemento');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clientes');
};
