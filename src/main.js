// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'; //饿了么UI
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import instance from './utils/request'; //axios二次封装的实例
import store from "./store"  //引入vuex的store
import {getMenuRoutes} from './utils/menu';

Vue.config.productionTip = false
Vue.use(ElementUI);

//全局使用axios 实例
Vue.prototype.$instance = instance;

//路由守卫。切换路由时不销毁vue组件和路由
router.beforeEach((to,from,next) => {
  //根据token判断当前浏览器是否已经登录，如果没有登录不加载路由菜单。
  if(window.localStorage.getItem("token")) {
    console.log("landing page")
    getMenuRoutes(router,store);
    next();
  }else{
      next();
  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
