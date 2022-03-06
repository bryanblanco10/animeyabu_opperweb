import router from '../../router'

export default
{
  namespaced: true,
  state: {},
  getters: {},
  mutations: {
    setUser(state, user) {
      state.users.push(user)
    },
  },
  actions: {
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("authenticated");
      localStorage.removeItem("user");
      router.push("/login");
    },
  },
}