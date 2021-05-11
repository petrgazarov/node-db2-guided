const commonConfig = {
  client: 'sqlite3',
  useNullAsDefault: null,
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    
  },
}

module.exports = {
  // configs for different dbs
  development: {
    ...commonConfig
  },
  production: {
    ...commonConfig
  }
}
