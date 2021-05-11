exports.up = function (knex) {
  return knex.schema
    .createTable('fruits')
    .createTable('users')
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('fruits')
};
