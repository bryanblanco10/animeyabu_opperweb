import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login'
import Prueba from '../views/Prueba.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/prueba',
    component: Prueba,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
