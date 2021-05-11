exports.up = function (knex) {
  return knex.schema
    .createTable('fruits', table => {
      // primary key fruit_id integers, auto incrementing...
      table.increments('fruit_id')
      
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('fruits')
};
