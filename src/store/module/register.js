// import AuthRepository from "@/repositories/AuthRepository";
const PUBLIC_KEY = process.env.VUE_APP_PUBLIC_KEY;
import { v4 as uuidv4 } from 'uuid';
import { messageSweetAlert, generateHash, TestToken } from "@/utils";
import router from '../../router'

export default
{
  namespaced: true,
  state: {
    users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [],
    isBusy: false,
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    setUsers(state, user) {
      state.users.push(user)
    },
  },
  actions: {
    async register({ commit, state }, payload) {
      try {
        state.isBusy = true;

        const user = {
          ...payload,
          id: uuidv4(),
          apiKey: PUBLIC_KEY,
          utcTimeStamp: new Date(),
          signature: await generateHash(),
        }

        commit("setUsers", user);

        const { token } = TestToken();
  
        localStorage.setItem("access_token", token);
        localStorage.setItem("authenticated", true);
        localStorage.setItem("users", JSON.stringify(state.users));
        localStorage.setItem("user", JSON.stringify(user));

        messageSweetAlert('success', 'Usuario registrado con éxito')
        router.push("/listado-de-categorias");
        // const res = await AuthRepository.register({
        //   ...payload,
        //   apiKey: PUBLIC_KEY,
        //   utcTimeStamp: new Date(),
        //   signature: await generateHash(),
        // });
        // console.log(res)
      } catch (error) {
        console.log(error)
      } finally {
        state.isBusy = false;
      }
    },
  },
}