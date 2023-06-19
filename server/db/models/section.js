const Sequelize = require('sequelize')
const db = require('../db')
const { FALSE } = require('node-sass')

const Section = db.define('section', {
  title: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.STRING,
    allowNull: FALSE,
  },
  reps: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rows: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
})

module.exports = Section
