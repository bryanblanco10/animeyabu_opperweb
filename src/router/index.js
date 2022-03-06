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
    name: "login",
  },
  {
    path: '/app',
    component: Layout,
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName: "dashboard"*/ "@/views/dashboard/Dashboard"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: '/listado-de-categorias',
        component: () =>
          import(/* webpackChunkName: "listCategories"*/ "@/views/categories/ListCategories"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: '/crear-categoria',
        component: () =>
          import(/* webpackChunkName: "createCategory"*/ "@/views/categories/CreateCategory"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: '/actualizar-categoria/:id',
        name: 'updateCategory',
        component: () =>
          import(/* webpackChunkName: "createCategory"*/ "@/views/categories/CreateCategory"),
        meta: {
          requireAuth: true,
        },
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export const beforeEach = async(to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!localStorage.getItem("access_token")) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else {
    if (
      localStorage.getItem("authenticated") === "true" &&
      to.name === "login" || to.path === "/"
    ) {
      next("/app");
    } else {
      next();
    }
  }
}

router.beforeEach((to, from, next) => beforeEach(to, from, next));

export default router
