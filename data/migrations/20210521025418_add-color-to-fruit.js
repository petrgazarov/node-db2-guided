
exports.up = function(knex) {
  return knex.schema.table('fruits', table => {
    table.string('color');
  });
};

exports.down = function(knex) {
  return knex.schema.table('fruits', table => {
    table.dropColumn('color');
  });
};
