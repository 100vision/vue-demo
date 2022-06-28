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
/*    {
      path: '/',
      name: 'App',
      component:App

    },*/
    {
      path:'/index',
      name:'index',
      component:()=>import('../views/index'),  //按需加载
      children:
        [
          {path: '/product/list', name: 'products', component: products},
          {path: '/product/details', name: 'details', component: details}
        ]
    },

    {
      path:'/login',
      name:'login',
      component:()=>import('../views/Login'),
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
