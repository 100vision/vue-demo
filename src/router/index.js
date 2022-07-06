import Vue from 'vue'
import Router from 'vue-router'
import Product from "../views/product";
import User from "../views/User";
import App from "../App";


Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component:()=>import('../views/Login'),
      hidden:true
    },

    {
      path:'/home',
      name: 'home',
      component:()=>import('../views/home'),
      hidden: true
    },


  ],


})
