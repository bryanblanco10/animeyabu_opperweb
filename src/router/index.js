import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login'
import Layout from '../components/layout/Layout.vue'

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
    path: '/app',
    component: Layout,
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName: "dashboard"*/ "@/views/dashboard/Dashboard"),
      },
      {
        path: '/listado-de-categorias',
        component: () =>
          import(/* webpackChunkName: "listCategories"*/ "@/views/categories/ListCategories"),
      },
      {
        path: '/crear-categoria',
        component: () =>
          import(/* webpackChunkName: "createCategory"*/ "@/views/categories/CreateCategory"),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
