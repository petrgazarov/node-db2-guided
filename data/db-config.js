const knex = require('knex');
const config = require('../knexfile');

// We must select the development object from our knexfile
const db = knex(config.development);

// Export for use in models
module.exports = db;