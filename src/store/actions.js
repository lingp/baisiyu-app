import {logout} from '../apis'
import {RESET_USER_INFO, RECEIVE_USER_INFO} from './mutation-types'

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
  }
}
