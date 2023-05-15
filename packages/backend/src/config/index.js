require('dotenv').config()
const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 4000,
  cors: process.env.CORS || '*',
  url_api: process.env.TOOLBOX_URL_API,
  token_api: process.env.TOOLBOX_TOKEN_API
}

module.exports = { config }
