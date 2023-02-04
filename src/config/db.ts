import { MYSQL_USER, MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_HOST } from './env'

const development = {
  username: MYSQL_USER || 'root',
  password: MYSQL_PASSWORD || 'root',
  database: MYSQL_DATABASE || 'db',
  host: MYSQL_HOST || '127.0.0.1',
  dialect: 'mysql',
  logging: true,
}

const testing = {
  ...development,
  logging: false,
}

const production = {
  ...testing,
}

export { development, testing, production }
