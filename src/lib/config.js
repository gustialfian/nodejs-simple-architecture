const { PROD_ENV, DEV_ENV, TEST_ENV } = require('./constants')
const env = process.env.APP_ENV || DEV_ENV

const config = {
  app: {
    env,
    port: process.env.APP_PORT || 3000,
  },
  db: {
    connString: process.env.PG_CONN_STRING
  },
  broker: {
    connString: process.env.RABBITMQ_CONN_STRING
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret-key",
  },
  isProd: () => env === PROD_ENV,
  isDev: () => env === DEV_ENV,
  isTest: () => env === TEST_ENV,
}

console.log(`config: `, config)

module.exports = config