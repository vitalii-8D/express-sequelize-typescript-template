import Sequelize from 'sequelize'
import path from 'path'

import UserModel from './User'

const DB_CONFIG_PATH = path.resolve(__dirname, '../../config/db')

const config = require(DB_CONFIG_PATH)[process.env.NODE_ENV || 'development']

const sequelize = new Sequelize.Sequelize(config.database, config.username, config.password, config)

sequelize.authenticate()

const DB = {
  sequelize,
  Sequelize,
  User: UserModel(sequelize),
}

Object.keys(DB).forEach(modelName => {
  // @ts-ignore
  if (DB[modelName].associate) DB[modelName].associate(DB)
})

export default DB
