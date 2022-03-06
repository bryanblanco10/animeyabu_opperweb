// import UserRepository from "@/repositories/UserRepository";

export default
{
  namespaced: true,
  state: {
    user: null,
    users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [],
    isBusy: false,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    find({ commit}) {
      try {
        const user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null;
        commit("setUser", user)
      } catch (error) {
        console.log(error)
      } 
    }
  },
}