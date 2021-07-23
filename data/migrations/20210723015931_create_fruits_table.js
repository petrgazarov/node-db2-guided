
exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {
    table.increments();

    table.string('name').unique().notNullable();
    table.decimal('avgWeightOz');
    table.boolean('delicious');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
