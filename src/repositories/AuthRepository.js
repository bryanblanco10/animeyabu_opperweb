import { axios, API_ROUTES } from "@/config/index.js";

export default {
  async login(data) {
    let result = await axios.post(`${API_ROUTES.auth.login}`, data);

    return result;
  },

  async register(data) {
    let result = await axios.post(`${API_ROUTES.auth.register}`, data);

    return result;
  },
}