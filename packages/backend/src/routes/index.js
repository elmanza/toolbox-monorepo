const filesApi = require('../components/files')

module.exports = app => {
  filesApi(app)

  app.get('/', (req, res) => res.send('Server On!'))
}
