import Api from '@/services/Api'

export default {
  getCrafts () {
    return Api().get('parse').then(resp => {
      return resp
    })
  },
  getFiles () {
    return Api().get('files').then(resp => {
      return resp
    })
  },
  saveCraft (filename, crafts) {
    const body = {message: crafts}
    return Api().post('save', body, {
      headers: {
        'fileName': filename
      }
    })
  },
  getSavedFile (fileName) {
    const params = {
      filename: fileName
    }
    return Api().get('parse', {params}).then(resp => {
      return resp
    })
  }
}
