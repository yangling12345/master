import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Class from '@/components/class/Class'
import Cart from '@/components/cart/Cart'
import My from '@/components/my/My'
import Detail from '@/components/detail/Detail'
import Register from '@/components/registerlogin/Register'
import Detae from '@/components/details/Detae'
import Swiper from '@/components/swiper/Swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/detae',
      name: 'Detae',
      component: Detae
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
