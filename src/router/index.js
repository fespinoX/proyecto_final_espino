import Vue from 'vue'
import VueRouter from 'vue-router'
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
    component: CarritoPage
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
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

export default router
