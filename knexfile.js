const commonConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
}

module.exports = {
  development: {
    connection: {
      filename: './data/produce.db3',
    },
    ...commonConfig
  },
  production: {
    connection: {
      filename: './data/prod-produce.db3',
    },
    ...commonConfig
  }
}
