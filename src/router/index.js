import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/Login.vue'

/* eslint-disable */

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [ // 二级路由的配置
      {
        path: 'deviceC',
        component: () => import('../views/home/deviceC')
      },
      {
        path: 'monitor',
        component: () => import('../views/home/monitor')
      },

      {
        path: 'beijian',
        component: () => import('../views/home/beijian')
      },

      {
        path: 'shebeixinxi',
        component: () => import('../views/home/shebeixinxi')
      },
      {
        path: 'guzhangxinxi',
        component: () => import('../views/home/guzhangxinxi')
      },
      {
        path: 'monitor2',
        component: () => import('../views/home/monitor2')
      },
      {
        path: 'monitor3',
        component: () => import('../views/home/monitor3')
      },
      {
        path: 'monitor4',
        component: () => import('../views/home/monitor4')
      },
      {
        path: '2monitor1',
        component: () => import('../views/home/2monitor1')
      },
      {
        path: '2monitor2',
        component: () => import('../views/home/2monitor2')
      },
      {
        path: '2monitor3',
        component: () => import('../views/home/2monitor3')
      },
      {
        path: '2monitor4',
        component: () => import('../views/home/2monitor4')
      },
      {
        path: '3monitor1',
        component: () => import('../views/home/3monitor1')
      },
      {
        path: 'weixiujilu',
        component: () => import('../views/home/weixiujilu')
      }

    ]
  },
  { // 默认路由的设置
    path: '/login',
    name: 'login',
    component: login
  },
  { // 默认路由的设置
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'biaogeceshi0906',
    component: () => import('../views/biaogeceshi0906')
  },
]

const router = new VueRouter({
  routes
})

export default router




