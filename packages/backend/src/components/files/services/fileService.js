const axios = require('axios')
const { config } = require('../../../config')

class File {
  async getDataList () {
    try {
      const res = await axios.get(`${config.url_api}/secret/files`, {
        headers: {
          Authorization: `Bearer ${config.token_api}`
        }
      })
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  async getDataWithInfo (fileName) {
    try {
      if (fileName) return await this.getFilesRequest([fileName])
      return await this.getFilesRequest((await this.getDataList()).files)
    } catch (error) {
      console.log(error)
    }
  }

  async getFilesRequest (files) {
    const result = []
    const promise = []
    for (const archivoName of files) {
      promise.push(axios.get(`${config.url_api}/secret/file/${archivoName}`, { headers: { Authorization: `Bearer ${config.token_api}` } }))
    }
    let resultPromise = await Promise.allSettled(promise)
    resultPromise = resultPromise.filter(fileRequest => fileRequest.status === 'fulfilled')
    for (const file of resultPromise) {
      const urlParts = file.value.config.url.split('/')
      const objFile = {
        file: urlParts[urlParts.length - 1],
        lines: []
      }
      const dataFormateada = this.formatData(file.value.data)
      if (dataFormateada) objFile.lines = dataFormateada
      result.push(objFile)
    }
    return result
  }

  formatData (texto) {
    try {
      if (texto !== '') {
        const _arr = texto.split('\n')
        if (_arr.length > 1) {
          const columns = _arr[0].split(',')
          const response = []
          for (let i = 1; i < _arr.length; i++) {
            const fileInternalFor = _arr[i].split(',')
            if (fileInternalFor.length === 4) {
              const objFile = {}
              objFile[columns[0]] = fileInternalFor[0]
              objFile[columns[1]] = fileInternalFor[1]
              objFile[columns[2]] = fileInternalFor[2]
              objFile[columns[3]] = fileInternalFor[3]
              if (this.validateObjData(objFile)) response.push(objFile)
            }
          }
          return response
        } else {
          // No existen rows en el documento
          return null
        }
      } else {
        // El documento está vacio
        return null
      }
    } catch (error) {
      console.log(`[ERROR] formatData --> ${error}`)
      return null
    }
  }

  validateObjData({ text, number, hex }) {
  
    if (text === "") {
      return false;
    }
  
    if (isNaN(number)) {
      return false;
    }
  
    if (!/^[a-fA-F0-9]+$/.test(hex)) {
      return false;
    }
  
    return true;
  }
};

module.exports = new File()
