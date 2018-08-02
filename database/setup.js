require('dotenv/config')
const { MongoClient } = require('mongodb')
const seed = require('./seed')

MongoClient
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(client => {
    const db = client.db('heroku_skz5tpxx')
    const collection = db.collection('parts')
    return collection 
      .deleteMany({})
      .then(() => collection.insertMany(seed))
      .then(() => client.close())
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  