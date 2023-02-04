import { config } from 'dotenv'
config()

export const { NODE_ENV, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_HOST, PORT } = process.env
