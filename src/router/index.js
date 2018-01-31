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
import All from '@/components/All';
import Login from '@/components/Login';
import PersonInfo from '@/components/PersonInfo';
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
      path:'/Details/:a',
      name : 'Details',
      component : Details
    },
     {
      path:'/address',
      name : 'Address',
      component : Address
    },
     {
      path:'/All/:all',
      name : 'All',
      component : All
    },
    {
      path:'/login',
      name : 'Login',
      component : Login
    },
     {
      path:'/personInfo',
      name : 'PersonInfo',
      component : PersonInfo
     }//,
    // {
    //   path:'/aa/:two',
    //   name : 'All',
    //   component : All
    // } 
  ]
})
