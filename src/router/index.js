import Vue from 'vue'
import Router from 'vue-router'
import Product from "../views/Product";
import User from "../views/User";
import App from "../App";

Vue.use(Router)

export default new Router({
  routes: [
/*    {
      path: '/',
      name: 'App',
      component:App

    },*/
    {
      path:'/index',
      name:'index',
      component:()=>import('../views/index')  //按需加载
    },
    {
      path:'/product',
      name:'product',
      component:Product
    },
    {
      path:'/user',
      name:'user',
      component:User
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/Login')
    }
  ]
})
