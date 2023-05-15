function parseParamsToObject (element) {
  return (req, res, next) => {
    const qKeys = Object.keys(req[element])

    qKeys.forEach(qKey => {
      let value = req[element][qKey]
      try {
        value = JSON.parse(value)
        if (typeof value === 'object') req[element][qKey] = value
      } catch (error) {

      }
    })

    next()
  }
}

module.exports = {
  parseQueryParamsToObject: parseParamsToObject('query'),
  parseBodyParamsToObject: parseParamsToObject('body')
}
