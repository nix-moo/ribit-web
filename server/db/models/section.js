const Sequelize = require('sequelize')
const db = require('../db')
const { FALSE } = require('node-sass')

const Section = db.define('section', {
  title: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.ENUM,
    allowNull: FALSE,
  },
  reps: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = Section
