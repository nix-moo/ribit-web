const Sequelize = require('sequelize');

const Row = Sequelize.define('row', {
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
});

module.export = Row;
