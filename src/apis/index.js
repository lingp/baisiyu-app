import ajax from './ajax'

export const test = data => ajax('http://www.baidu.com')

export const test2 = data => ajax('/api/')

export const loginByUsernamePwd = (username, password, captcha) => ajax('/api/v1/login/login', {
  username,
  password,
  captcha
}, 'POST')

export const logout = () => {}

export const getCaptcha = () => ajax('/api/v1/login/captcha')
