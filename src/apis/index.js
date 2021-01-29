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

// 文章加载
export const loadArticle = (channelId) => ajax('/api/v1/article/load', {
  'channel_id': channelId
}, 'POST')

// 文章加载更多
export const loadArticleMore = (channelId) => ajax('/api/v1/article/load_more', {
  'channel_id': channelId
}, 'POST')

// 文章加载更多
export const loadArticleNew = (channelId) => ajax('/api/v1/article/load_new', {
  'channel_id': channelId
}, 'POST')
