import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mypage'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import('@/views/MyPage')
  }
]

const router = new VueRouter({
  routes
})

export default router
