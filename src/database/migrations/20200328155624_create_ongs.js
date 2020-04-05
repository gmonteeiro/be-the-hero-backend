/**
 * Para criar esse arquivo, rodar: npx knex migrate:make create_ongs
*/

exports.up = function(knex) {
    //http://knexjs.org/#Schema-createTable
    return knex.schema.createTable('ongs', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

// deletar tabelas
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

/**
 * para executar, rodar o comando: npx knex migrate:latest
*/