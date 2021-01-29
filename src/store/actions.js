import {loadArticle, loadArticleMore, loadArticleNew, logout} from '../apis'
import {RESET_USER_INFO, RECEIVE_USER_INFO, SET_ARTICLE_LIST} from './mutation-types'

export default {
  // 记录用户信息
  recordUserInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 退出登录
  async logout({commit}) {
    const result = await logout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },

  // 加载文章
  async loadArticle({commit}, channelId) {
    const result = await loadArticle(channelId)
    const data = result.data
    if (result.code === 0) {
      commit(SET_ARTICLE_LIST, {articles: data})
    }
  },

  // 加载更多文章
  async loadArticleMore({commit}, {channelId, originArticles}) {
    const result = await loadArticleMore(channelId)
    let data = result.data
    console.log(data)
    console.log('originArticles', originArticles)
    // let startTime = new Date().getTime() + parseInt(1000, 10);
    // while(new Date().getTime() < startTime) {}

    if (result.code === 0) {
      let o = Object.assign(data, originArticles)
      commit(SET_ARTICLE_LIST, {articles: o})
    }
  },

  // 加载最新文章
  async loadArticleNew({commit}, {channelId, originArticles}) {
    const result = await loadArticleNew(channelId)
    const data = result.data
    console.log('originArticles', originArticles)
    if (result.code === 0) {
      let o = Object.assign(data, originArticles)
      commit(SET_ARTICLE_LIST, {articles: o})
    }
  }

}
