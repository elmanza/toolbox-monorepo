const express = require('express')
const cors = require('cors')
const serverRoutes = require('./routes')
const path = require('path')
const { config } = require('./config')
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middlewares/errorHandlers')
const notFoundHandler = require('./utils/middlewares/notFoundHandler')
class App {
  constructor () {
    this.app = express()
    this.port = config.port
    this.settings()
    this.views()
    this.middlewares()
    this.routes()
    this.middlewaresCatch()
  }

  settings () {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.static('public'))
  }

  views () {
    this.app.set('views', path.join(__dirname, 'views', 'ejs'))
    this.app.set('view engine', 'ejs')
  }

  middlewares () {
    this.app.use(cors(`${config.cors}`))
  }

  middlewaresCatch () {
    // Catch 404
    this.app.use(notFoundHandler)
    // Errors controllers
    this.app.use(logErrors)
    this.app.use(wrapErrors)
    this.app.use(errorHandler)
  }

  routes () {
    serverRoutes(this.app)
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Server on http://localhost:${this.port}`)
    })
  }
}

module.exports = new App()
