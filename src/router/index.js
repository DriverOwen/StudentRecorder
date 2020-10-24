import Vue from 'vue'
import VueRouter from 'vue-router'
import tree from "element-ui/packages/table/src/store/tree";
import store from '@/store/index'
Vue.use(VueRouter)

const Login = () => import('@/views/Login/login')
const Test = () => import('@/views/test')
const Home = () => import('@/views/Home/home')
const ISAU = () => import('@/views/ISAU/isau')
const USER = () => import('@/views/ISAU/Child/user')
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      redirectAlreadyLogin: true
    }
  },
  {
    path: '/isau',
    name: 'isau',
    component: ISAU
  },
  {
    path: '/user/:id',
    name: 'user',
    component: USER
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if(to.meta.requiredLogin && !store.state.user.isLogin){
    next({ name : 'login'})
  }else if(to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next( '/')
  }else {
    next()
  }
})

export default router
