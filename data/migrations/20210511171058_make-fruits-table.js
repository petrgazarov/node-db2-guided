exports.up = function(knex) {
  return knex.schema.createTable('fruits')
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
};
