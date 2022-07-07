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

//路由守卫。全局控制切换路由时的判断逻辑不销毁vue组件和路由
router.beforeEach((to,from,next) => {
  //根据token判断当前浏览器是否已经登录，如果没有登录不加载路由菜单。
  if(window.sessionStorage.getItem("token")) {
      getMenuRoutes(router,store);
      if (!window.sessionStorage.getItem("user")) {
        //获取登录成功的用户信息
         return instance.get("/api/user/info").then(resp=>{
          if (resp){

            //把用户信息存入浏览器SessionStorage
            window.sessionStorage.setItem("user",JSON.stringify(resp.data.payload));
            next(to.path);
          }

        });
      }

      next();

    //处理浏览器未登录的情况（即浏览器中没有token）
  } else {
      //1、如果是去登录页，直接放行
      if (to.path == '/') {
        next();
      } else {     //2，如果未登录就想直接去其他页（例如：直接输入url/path，在这里拦截。登录成功后，重定向到目标页面；
        next('/?redirect=' + to.path);
      }
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
