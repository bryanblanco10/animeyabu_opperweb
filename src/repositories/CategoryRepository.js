import { axios, API_ROUTES } from "@/config/index.js";

export default {
  async getAll() {
    let result = await axios.get(`${API_ROUTES.category.get}`);

    return result;
  },

  async save(data) {
    let result = await axios.post(`${API_ROUTES.category.save}`, data);

    return result;
  },

  async update(id, data) {
    let result = await axios.put(`${API_ROUTES.category.update}/${id}`, data);

    return result;
  },
}