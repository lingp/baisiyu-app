import axios from 'axios'
import {getCookie} from '../utils/utils'
import {TOKEN_COOKIE} from '../constants/cookie-name'

export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    let token = getCookie(TOKEN_COOKIE)

    if (type === 'GET') {
      let queryStr = ''
      Object.keys(data).forEach(key => {
        queryStr += key + '=' + data[key] + '&'
      })
      if (queryStr !== '') {
        queryStr = queryStr.substring(0, queryStr.lastIndexOf('&'))
        url = url + '?' + queryStr
      }
      promise = axios.get(url, { headers: {token: token, platform: 'app'} })
    } else {
      promise = axios.post(url, data, { headers: {token: token, platform: 'app'} })
    }

    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
