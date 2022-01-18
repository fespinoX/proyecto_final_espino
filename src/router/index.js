import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import MainPage from '../components/pages/MainPage.vue'
import CarritoPage from '../components/pages/CarritoPage.vue'
import AdminPage from '../components/pages/AdminPage.vue'
import UserPage from '../components/pages/UserPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/carrito',
    name: 'CarritoPage',
    component: CarritoPage,
    meta: { 
      requiresAuth: true 
    }
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage, 
    meta: { 
      requiresAdmin: true 
    }
  },
  {
    path: '/user',
    name: 'UserPage',
    component: UserPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  
  store.dispatch("checkUsuario")

  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (store.getters.isLoggedIn) {

      next()
      return

    } else {
      next('/user')
    }

  }
  else if (to.matched.some(record => record.meta.requiresAdmin)) {

    if (store.getters.isAdmin) {

      next()
      return

    } else {
      next('/user')
    }

  }   else {
    next()
  }
})





export default router
