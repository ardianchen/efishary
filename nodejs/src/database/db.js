import Sequelize from 'sequelize'
import config from './config'

module.exports = (() => {
  return new Sequelize(
    process.env.DB_NAME || 'db_test',
    process.env.DB_USER || 'admin',
    process.env.DB_PASSWORD || 'password',
    config
  )
})()
