import Vue from 'vue'
import Vuex from 'vuex'
import login from './module/login'
import register from './module/register'
import logout from './module/logout'
import category from './module/category'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    register,
    logout,
    category,
    user,
  }
})
