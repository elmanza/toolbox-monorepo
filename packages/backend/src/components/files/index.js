const { Router } = require('express')
const router = Router()
const fileController = require('./controllers/fileController')

module.exports = app => {
  app.use('/files', router)

  router.get('/data', fileController.getData)
  router.get('/list', fileController.getDataList)
}
