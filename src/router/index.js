import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/pages/MainPage.vue'
import CarritoPage from '../components/pages/CarritoPage.vue'
import AdminPage from '../components/pages/AdminPage.vue'

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
