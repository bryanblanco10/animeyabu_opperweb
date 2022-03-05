import AuthRepository from "@/repositories/AuthRepository";
const PUBLIC_KEY = process.env.VUE_APP_PUBLIC_KEY;
import { generateHash } from "@/utils";

export default
{
  namespaced: true,
  state: {
    user: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : "",
    isBusy: false,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
  },
  actions: {
    async register({ commit, state }, payload) {
      const user = null
      try {
        state.isBusy = true;
        const res = await AuthRepository.register({
          ...payload,
          apiKey: PUBLIC_KEY,
          utcTimeStamp: new Date(),
          signature: await generateHash(),
        });
        console.log(res)
      } catch (error) {
        console.log(error)
      } finally {
        state.isBusy = false;
      }
      // localStorage.setItem("user", JSON.stringify(user));
      // localStorage.setItem("access_token", token);
      // localStorage.setItem("authenticated", true);

      commit("setUser", user);
    },
  },
}