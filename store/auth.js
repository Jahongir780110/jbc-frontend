export const state = () => ({
  token: null,
})

export const mutations = {
  setToken(state, val) {
    state.token = val
  },
  clearToken(state) {
    state.token = null
  },
}

export const actions = {
  async login({ commit }, data) {
    try {
      const result = await this.$axios.$post('/admin/login', data)
      commit('setToken', result.token)
      this.$axios.setToken(result.token, 'Bearer')
      this.$cookies.set('token', result.token)
      return 'success'
    } catch (e) {
      return { error: e.response.data.message }
    }
  },
  async autoLogin({ commit, redirect }) {
    try {
      const token = this.$cookies.get('token')
      const result = await this.$axios.$post('/admin/auth', undefined, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      if (result.state) {
        commit('setToken', token)
      }
    } catch (error) {
      console.log('Error while authenticating')
    }
  },
  logout({ commit }) {
    commit('setToken', null)
    this.$axios.setToken(false)
    this.$cookies.remove('token')
  },
}

export const getters = {
  token: (state) => state.token,
  isAuthenticated: (state) => state.token !== null,
}
