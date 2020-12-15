import Vue from 'vue'
import VueRouter from 'vue-router'
import Layer from './pages/Layer.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/:symbol',
    component: Layer,
    props: true,
    name: 'home'
  },
  {
    path: '*',
    component: Layer,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router