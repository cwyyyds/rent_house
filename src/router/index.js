import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: 'mypage',
        name: 'mypage',
        component: () => import('@/views/MyPage')
      },
      {
        path: 'information',
        name: 'information',
        component: () => import('@/views/Information')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
