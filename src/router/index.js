import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/add',
    name: 'AddTestnet',
    component: () => import(/* webpackChunkName: "add" */ '../views/AddTestnet.vue')
  },
  {
    path: '/',
    name: 'Report',
    component: () => import(/* webpackChunkName: "report" */ '../views/Report.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
