const { Router } = require('express')
const uuid = require('uuid')

module.exports = function buildRouter(collection) {
  const router = new Router()

  router.post('/save', (req, res, next) => {
    const buildId = uuid()
    const buildSave = Object.assign(req.body, { buildId: buildId })
    console.log(buildSave)
    collection
      .insertOne(buildSave)
      .then(build => res.status(201).json(build))
      .catch(err => next(err))
  })

  router.get('/save/builds', (req, res, next) => {
    collection
      .find()
      .toArray()
      .then(builds => res.json(builds))
      .catch(err => next(err))
  })

  router.put('/save/:id', (req, res, next) => {
    const { body, params: { id } } = req
    collection
      .findOneAndUpdate(
        { buildId: id },
        { $set: body },
        { returnOriginal: false }
      )
      .then(({ value }) => {
        value
          ? res.json(value)
          : res.sendStatus(404)
      })
      .catch(err =>  next(err))
  })

  router.delete('/delete/:id', (req, res, next) => {
    collection
      .findOneAndDelete({ buildId: req.params.id })
      .then(({ value }) => {
        value
          ? res.sendStatus(204)
          : res.sendStatus(404)
      })
      .catch(err => next(err))
  })

  return router
}