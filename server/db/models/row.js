const Sequelize = require('sequelize')
const db = require('../db')

const Row = db.define('row', {
  num: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  side: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['inside', 'outside', 'round']],
    },
  },
})

module.exports = Row
