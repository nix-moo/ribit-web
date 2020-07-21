const Sequelize = require('sequelize');
const db = require('../db');

const Pattern = db.define('pattern', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
  },
  ravelry: {
    type: Sequelize.STRING,
  },
  sizes: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

// Pattern.beforeCreate(); // Validate

module.exports = Pattern;
