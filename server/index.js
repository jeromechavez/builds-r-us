require('dotenv/config')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const partsRouter = require('./routes/parts-router')
const buildRouter = require('./routes/builds-router')

MongoClient
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  .then(client => {
    const db = client.db()
    const partsCollection = db.collection('parts')
    const buildCollection = db.collection('builds')
    const publicPath = path.join(__dirname, 'public/')
    express()
      .use(express.static(publicPath))
      .use(bodyParser.json())
      .use('/computer-parts', partsRouter(partsCollection))
      .use('/builds', buildRouter(buildCollection))
      .use((err, req, res, next) => {
        console.error(err)
        res.status(500).json({
          error: 'Internal Server Error'
        })
      })
      .listen(process.env.PORT, () => {
        console.log(`Listening on ${ process.env.PORT}!`)
      })
  })