import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import self from "@/components/self"
import cart from "@/components/cart"
import Search from '@/components/Search';
import FenLei from '@/components/FenLei';
import Details from '@/components/Details';
import Address from '@/components/Address';
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
    },
    {
      path:'/search',
      name : 'Search',
      component : Search
    },
    {
      path:'/fenlei/:fid',
      name : 'FenLei',
      component : FenLei
    },
    {
      path:'/Details',
      name : 'Details',
      component : Details
    },
     {
      path:'/address',
      name : 'Address',
      component : Address
    }
  ]
})
