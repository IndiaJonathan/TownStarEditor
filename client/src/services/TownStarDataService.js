import Api from '@/services/Api'

export default {
  getCrafts () {
    return Api().get('parse').then(resp => {
      return resp
    })
  }
}
