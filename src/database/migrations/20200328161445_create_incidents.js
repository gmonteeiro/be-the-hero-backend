/**
 * Para criar esse arquivo, rodar: npx knex migrate:make create_incidents
*/

exports.up = function(knex) {
    //http://knexjs.org/#Schema-createTable
    return knex.schema.createTable('incidents', function (table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};

/**
 * para executar, rodar o comando: npx knex migrate:latest
*/