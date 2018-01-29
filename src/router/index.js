import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import self from "@/components/self"
import cart from "@/components/cart"
Vue.use(Router)

export default new Router({
mode:"hash",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/self',
      name: 'self',
      component: self
    }
  ]
})
