const commonConfig = {
  client: 'sqlite3',
  useNullAsDefault: null,
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
