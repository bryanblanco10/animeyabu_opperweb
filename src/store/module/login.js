// import AuthRepository from "@/repositories/AuthRepository";
const API_KEY = process.env.VUE_APP_API_KEY;
import { messageSweetAlert, generateHash, TestToken } from "@/utils";
import router from '../../router'

export default
{
  namespaced: true,
  state: {
    users: null,
    isBusy: false,
  },
  getters: {},
  mutations: {},
  actions: {
    async login({ state }, payload) {
      try {
        state.users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
        state.isBusy = true;
        const user = {
          ...payload,
          apiKey: API_KEY,
          utcTimeStamp: new Date(),
          signature: await generateHash(),
        }
        
        const { email, password } = user;

        const users = state.users;
        const hasUser = users.find(el => el.email == email && el.password == password);

        if (!hasUser) {
          return messageSweetAlert('error', 'Email o contraseña incorrectos');
        }

        const { token } = TestToken();
        
        localStorage.setItem("access_token", token);
        localStorage.setItem("authenticated", true);
        localStorage.setItem("user", JSON.stringify(hasUser));
        
        router.push("/listado-de-categorias");
        // const res = await AuthRepository.login({
        //   ...payload,
        //   apiKey: API_KEY,
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