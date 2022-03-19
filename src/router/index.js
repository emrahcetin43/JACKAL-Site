import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'AddTestnet',
    component: () => import(/* webpackChunkName: "add" */ '../views/AddTestnet.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
