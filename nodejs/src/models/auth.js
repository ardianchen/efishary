import { database } from '../database'
import Sequelize from 'sequelize'
const table = 'admin'
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
  username: {
    type: Sequelize.TEXT
    // allowNull: false
  },
  password: {
    type: Sequelize.TEXT,
    default: Math.random().toString(32).slice(-4)
    // allowNull: false
  },
  role: {
    type: Sequelize.TEXT
    // allowNull: false
  }
})

module.exports = auth
