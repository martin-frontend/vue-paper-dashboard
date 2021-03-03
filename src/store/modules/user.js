import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'

const state = {
  // token: getToken(),
  // name: '',
  // avatar: '',
  // introduction: '',
  // roles: [],
  authUser: null,
  // menus: []
}

const mutations = {
  // SET_TOKEN: (state, token) => {
  //   state.token = token
  // },
  // SET_INTRODUCTION: (state, introduction) => {
  //   state.introduction = introduction
  // },
  // SET_NAME: (state, name) => {
  //   state.name = name
  // },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // },
  // SET_ROLES: (state, roles) => {
  //   state.roles = roles
  // },
  SET_AUTHUSER: (state, authUser) => {
    state.authUser = authUser
  },
  // SET_MENU: (state, menus) => {
  //   state.menus = menus
  // },
  // SET_AUTHUSERSTATUS: (state, status) => {
  //   state.authUser.status = status
  // }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { account, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ account: account.trim(), password: password }).then(response => {
        const { user } = response.data.refresh
        commit('SET_AUTHUSER', user)
        setToken(user.account)
        resolve()
      }).catch(error => {
        alert(error.response.data.message)
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }, authUser) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { user } = response.data.refresh
        commit('SET_AUTHUSER', user)
        resolve()
      }).catch(error => {
        alert(error.response.data.message)
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    console.log('logout');
    
    return new Promise((resolve, reject) => {
      logout().then(() => {
        commit('SET_AUTHUSER', null)
        removeToken()
        // resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_AUTHUSER', null)
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  // async changeRoles({ commit, dispatch }, role) {
  //   const token = role + '-token'

  //   commit('SET_TOKEN', token)
  //   setToken(token)

  //   const { roles } = await dispatch('getInfo')

  //   resetRouter()

  //   // generate accessible routes map based on roles
  //   const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
  //   // dynamically add accessible routes
  //   router.addRoutes(accessRoutes)

  //   // reset visited views and cached views
  //   dispatch('tagsView/delAllViews', null, { root: true })
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
