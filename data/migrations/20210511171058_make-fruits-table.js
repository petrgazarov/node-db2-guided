

exports.up = function() {
  return knex.schema.createTable('fruits')
};

exports.down = function(knex) {

};
