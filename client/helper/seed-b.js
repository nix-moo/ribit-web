'use strict'

const testData = require('./testData')
const db = require('../server/db')
const { User, Pattern, Row } = require('../server/db/models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'admin@email.com',
      name: 'Admin',
      password: 'abc',
      isAdmin: true,
    }),
    User.create({
      email: 'test@email.com',
      name: 'Test',
      password: '123',
    }),
  ])
  console.group('Starting project creation...')
  console.log(testData.title)
  console.log(testData.author)

  const pattern = await Pattern.create({
    title: testData.title,
    author: testData.author,
    size: testData.size,
    ravelry: testData.ravelry,
  })
  console.log('uploaded pattern successfully!')
  console.groupEnd()
  await users[0].addPattern(pattern)

  const rows = await Promise.all(
    testData.rows.map(async row => {
      const newRow = await Row.create({ ...row })
      return newRow
    })
  )
  await pattern.addRows(rows)

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${rows.length} rows`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
