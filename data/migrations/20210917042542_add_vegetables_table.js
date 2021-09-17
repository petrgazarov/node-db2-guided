
exports.up = function(knex) {
  return knex.schema.createTable('vegetables', table => {
    table.increments();

    table.string('name').unique().notNullable();
    table.decimal('avgWeightOz');
    table.boolean('delicious');
    table.string('source');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('vegetables');
};
