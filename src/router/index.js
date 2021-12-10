import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/pages/MainPage.vue'
//import CarritoPage from '../pages/CarritoPage.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/pages/CarritoPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
