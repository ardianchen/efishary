import { database } from '../database'
import Sequelize from 'sequelize'
const table = 'temp_currency'
const auth = database.define(table, {
  id: {
    type: Sequelize.INTEGER(35),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: Sequelize.TEXT
    // allowNull: false
  },
  value: {
    type: Sequelize.DECIMAL
    // allowNull: false
  }
})

module.exports = auth
