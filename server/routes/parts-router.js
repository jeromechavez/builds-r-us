const { Router } = require('express')

module.exports = function partsRouter(collection) {
  const router = new Router()

  router.get('/', (req, res, next) => {
    collection
      .find()
      .toArray()
      .then(parts => res.json(parts))
      .catch(err => next(err))
  })

  return router
}