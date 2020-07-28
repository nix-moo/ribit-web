'use strict'

const testData = require('./testData')
const db = require('../server/db')
const {User, Pattern, Row} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      name: 'Codey',
      email: 'codey@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({name: 'Kona', email: 'kona@email.com', password: '123'})
  ])

  const regex = /\W+/g
  let sizeArr = testData.sizes.split(regex)
  console.log('sizeArr', sizeArr)

  const pattern = await Pattern.create({
    title: testData.title,
    author: testData.author,
    sizes: sizeArr,
    ravelry: testData.ravelry
  })

  await users[0].addPattern(pattern)


  console.log('typeof sizeArr', typeof sizeArr)

  const rows = await Promise.all(
    testData.rows.map(async row => {
      const newRow = await Row.create({...row})
      return newRow
    })
  )
  await pattern.addRows(rows)

  console.log(`seeded ${users.length} users`)
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
