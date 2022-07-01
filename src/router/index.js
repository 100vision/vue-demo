import Vue from 'vue'
import Router from 'vue-router'
import Product from "../views/products";
import User from "../views/User";
import App from "../App";
import products from "../views/products";
import details from "../views/details";

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
      name:'home',
      component:()=>import('../views/home'),
      hidden:true
    },

    {
      path:"/**",
      name:'page_not_found',
      component:()=>import("../views/404"),
      hidden: true
    }
  ]
})
