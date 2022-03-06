import { axios, API_ROUTES } from "@/config/index.js";

export default {
  async find() {
    let result = await axios.get(`${API_ROUTES.user.find}`);

    return result;
  },
}