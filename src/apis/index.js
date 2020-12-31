import ajax from './ajax'

export const test = data => ajax('http://www.baidu.com')

export const test2 = data => ajax('/api/')

