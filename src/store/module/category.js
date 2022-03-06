// import CategoryRepository from "@/repositories/CategoryRepository";
const PUBLIC_KEY = process.env.VUE_APP_PUBLIC_KEY;
import { v4 as uuidv4 } from 'uuid';
import { messageSweetAlert, generateHash } from "@/utils";
import router from '../../router'

export default
{
  namespaced: true,
  state: {
    categories: JSON.parse(localStorage.getItem("categories")) ? JSON.parse(localStorage.getItem("categories")) : [],
    isBusy: false,
    category: null,
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getCategory(state) {
      return state.category;
    }
  },
  mutations: {
    setCategories(state, category) {
      state.categories.push(category);
    },
    setCategory(state, category) {
      state.category = category;
    }
  },
  actions: {
    // getAll({ commit, state }) {},
    async save({ commit, state }, payload) {
      try {
        state.isBusy = true;

        const category = {
          ...payload,
          id: payload.id ? payload.id : uuidv4(),
          apiKey: PUBLIC_KEY,
          utcTimeStamp: new Date(),
          signature: await generateHash(),
        }

        if (payload.id) {
          state.categories.forEach(el => {
            if (el.id == payload.id) {
              el.nombre = payload.nombre;
            }
          });
        } else  {
          commit("setCategories", category);
        }
        
        localStorage.setItem("categories", JSON.stringify(state.categories));

        const message = payload.id ? 'Categoría actualizada con éxito' : 'Categoría creada con éxito';

        messageSweetAlert('success', message)
        router.push("/listado-de-categorias");

      } catch (error) {
        console.log(error)
      } finally {
        state.isBusy = false;
      }
    },
    find({ commit, state}, id) {
      try {
        let category = null;

        if (id) category = state.categories.find(el => el.id == id);
        commit("setCategory", category);
      } catch (error) {
        console.log(error)
      } 
    }
  },
}