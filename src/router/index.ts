import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
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
        path: '/yinHeader',
        name: 'yinHeader',
        component: () => import(/* webpackChunkName: "about" */ '../components/layouts/YinHeader.vue')
      },
      {
        path: '/userCrudView',
        name: 'userCrudView',
        component: () => import(/* webpackChunkName: "about" */ '../views/auth/UserCrudView.vue')
      },
      {
        path: '/injectEchartView',
        name: 'injectEchartView',
        component: () => import(/* webpackChunkName: "about" */ '../views/client/InjectEchartView.vue')
      },
      {
        path: '/textEditView',
        name: 'textEditView',
        component: () => import(/* webpackChunkName: "about" */ '../views/client/TextEditView.vue')
      },
      {
        path: '/algorithmView',
        name: 'algorithmView',
        component: () => import(/* webpackChunkName: "about" */ '../views/client/AlgorithmView.vue')
      },
    ],
  }
]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
