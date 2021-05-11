const commonConfig = {
  client: 'sqlite3'
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
