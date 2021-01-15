import {
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  SET_ARTICLE_LIST
} from './mutation-types'

export default {
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state, {userInfo}) {
    state.userInfo = {}
  },
  [SET_ARTICLE_LIST](state, {articles}) {
    state.articles = articles
  }
}
