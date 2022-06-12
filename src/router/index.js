import Vue from 'vue'
import Router from 'vue-router'
import Product from "../components/Product";
import User from "../components/User";
import Login from "../components/Login";
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
      component:Login
    }
  ]
})
