const { expect } = require('chai')
const fileService = require('./fileService')

describe('Testing File Component', () => {
  it('Lista de todos los titulos de archivos', async () => {
    const result = await fileService.getDataList()
    // Verificamos que el resultado sea un objeto
    expect(result).to.be.an('object')
    // Verificamos que el objeto tenga una propiedad "files"
    expect(result).to.have.property('files')
    // Verificamos que la propiedad "files" sea un array
    expect(result.files).to.be.an('array')
  })

  it('Obtener todos los archivos con su debida información interna', async () => {
    const result = await fileService.getDataWithInfo()
    // Verificamos que el resultado sea un array
    expect(result).to.be.an('array')
    // Verificamos que el objeto tenga una propiedad "files"
    result.forEach(async item => {
      expect(item).to.have.property('file').that.is.a('string')
      expect(item).to.have.property('lines').that.is.an('array')
    })
  }).timeout(5000)

  it('Obtener el archivo "test3.csv" de la lista de archivos, con su información interna', async () => {
    const result = await fileService.getDataWithInfo('test3.csv')
    expect(result).to.be.an('array')
    expect(result[0]).to.have.property('file').that.is.a('string')
    expect(result[0]).to.have.property('lines').that.is.an('array')
    expect(result[0]).to.have.property('lines').with.lengthOf(3)
  })
})
