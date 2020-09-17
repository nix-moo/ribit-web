const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/ribit', {
  logging: false,
})

module.exports = db

// global Mocha hook used for resource cleanup.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
