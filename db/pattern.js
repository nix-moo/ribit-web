const Sequelize = require('sequelize');

const Pattern = Sequelize.define('pattern', {
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

Pattern.beforeCreate(); // Validate

module.export = Pattern;
