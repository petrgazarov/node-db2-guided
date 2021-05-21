// The .up() function returns a promise (don't forget the "return")... use
// knex.schema.* methods (documented under Schema Builder on knexjs.org) to
// create schema changes.
exports.up = function(knex) {
  // The knex.schema.createTable() method creates a table in the database,
  // then passes an object representing that table to a callback method that
  // we supply. We can then use that table object to create columns. See the
  // knexjs.org documentation under "Schema Builder", under "table".
  return knex.schema.createTable('fruits', table => {
    // ".increments()" creates an identifier field that uses an
    // integer (the default size integer for the database in use, which is
    // 32bits for SQLite3). It also places the "unique" constraint, the "not
    // nullable" constraint, and the "autoincrement" constraint on the
    // column. Autoincrement causes the identifier to automatically be
    // assigned when a new record is created, with a value that is ++ the
    // most recently used value for that table.
    table.increments();
    // We use .unique() and .notNullable() methods to place the
    // UNIQUE and NOT NULL constraints on the column.
    table.string('name').unique().notNullable();
    table.decimal('avgWeightOz');
    table.boolean('delicious');
  });
};

// The .down() method is used with knex migrate:rollback. Your code here
// should put the database back into the same state/shape it was in before the
// .up() method was called. In this case, since .up() adds a table, .down() just
// needs to "drop" (remove/delete) the table. All schema *and* data are removed
// when you drop a table, fyi.
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
