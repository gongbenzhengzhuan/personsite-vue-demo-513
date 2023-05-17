import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "about" */ '../views/client/TableView.vue')
  },
  {
    path: '/monitor',
    name: 'monitor',
    component: () => import(/* webpackChunkName: "about" */ '../views/monitor/MonitorView.vue')
  },
  // manage
  {
    path: '/searchLogView',
    name: 'searchLogView',
    component: () => import(/* webpackChunkName: "about" */ '../views/manage/SearchLogView.vue')
  },
  // auth
  {
    path: '/roleView',
    name: 'roleView',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/RoleView.vue')
  },
  {
    path: '/userCrudView',
    name: 'userCrudView',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/UserCrudView.vue')
  }
]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
