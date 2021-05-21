module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },
    //------------------------------------------------------------------------//
    //  MIGRATION FILES
    //------------------------------------------------------------------------//
    // Key principles:
    //  - Migration files are JavaScript code that Knex uses to build and
    //    modify the schema of the database that the knexfile.js configuration
    //    points to.
    //  - Migration files allow you to get a new instance of a database into the
    //    schema that is current, by taking through all of the migration steps
    //    that other instances of the database have undergone.
    //  - Typically, migration files in production would be executed
    //    automatically as part of the automated deploy process. This is why
    //    migration files are "code" and are checked into the source repo.
    //  - The "knex migrate:*" CLI commands will manage the creation and
    //    execution of the migration files.
    //  - knex migrate:make file-name : this is to create a migration file.
    //    The file is created in the migrations directory configured in the
    //    knexfile.js file. The name of the migration file is the file-name
    //    supplied on the command line, prepended with a timestamp in
    //    YYYYMMDDHHMMSS format. This filename is important - do not change it.
    //  - knex migrate:latest : this will run the exported "up" functions in
    //    each of the migration files that have not been applied (executed)
    //    so far. When one or more migration files is executed, a record for
    //    each is written to the knex_migrations table in the database (with
    //    a batch number that is the same for each of the migration files
    //    executed.)
    //  - knex migrate:rollback : this will run the exported "down"
    //    functions in each of the migration files that were executed in the
    //    most recent "batch" that is documented in the knex_migrations
    //    table found in the database.
    //  - multiple migrate:rollback commands will each rollback the most
    //    recent batch of migration files (by executing the "down()"
    //    functions exported from each of them) found in the knex_migrations
    //    table in the database. When a migration file's "down()" function
    //    is executed, the record for that migration file is removed from
    //    the knex_migrations table.
    migrations: {
      directory: './data/migrations'
    },
    //------------------------------------------------------------------------//
    //  SEED FILES
    //------------------------------------------------------------------------//
    // Key principles:
    //  - Seed files are JavaScript code that Knex uses to load a database with
    //    data.
    //  - The data typically supports manual and automated testing.
    //  - Sometimes, seed data is used in production to pre-populate databases
    //    with important data used by the application.
    //  - The "knex seed:*" CLI commands will manage the creation and execution
    //    of the seed files.
    //  - Seed files have a single method that runs. It typically truncates one
    //    or more tables, and then populates them with data that is needed for
    //    tests and testing.
    //  - knex seed:make file-name creates a seed file template in the directory
    //    configured in the knexfile.js file (see below.) The filename is
    //    exactly as you provide it. It is recommended that you create the
    //    filenames with a numbering scheme to ensure they are executed in the
    //    proper order: knex executes them in alphabetical order of their names.
    //    Convention is to name them like: 01-seeds, 02-seeds, etc. (With a
    //    single seed file, this isn't important, but with more complex
    //    databases, with multiple tables, it's vital.)
    //  - knex seed:run will run *all* seed files, in alphabetical order of
    //    their names. There is no rollback, the run is not recorded in a table,
    //    etc.
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true
  },
};
