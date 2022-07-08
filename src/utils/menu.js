
import instance from '../utils/request'

//从后端获取菜单/路由信息并格式化。


export const getMenuRoutes = (router,store) => {
  //如果本地vuex store里已有菜单路由数据,就不再去后端获取。
  if (store.state.routes.length>0){
    return;
  }


  //1.获取后端接口数据库的原始路由数据。不需要传入任何参数，例如用户名。但前提是后端Spring Security项目的接口实现了从SecurityContext获取用户名。
  instance.get('/api/menu/').then(resp =>{
    if(resp){

      //调用自定义方法parseRoutes得到格式化好的路由。因api接口获取到路由数据中component是一个字符串，不能直接做路由使用，需要在写一个方法转换成vue组件对象
      let routesParsed = parseRoutes(resp.data.payload);

      console.log("打印后台获取的菜单集合........")
      console.log(routesParsed);


      //格式化后添加到Vue router
      router.addRoutes(routesParsed);

      //调用vuex中的mutation把格式化的路由存入vuex的store.
      store.commit('saveRoutes2Store',routesParsed);

    }
  }).catch(err => console.log(err))
}


//2. 格式化路由信息的自定义方法。；

export const parseRoutes = (routes) =>{
  let routesStaging = [];
  routes.forEach(route =>{
    let{
      path,
      component,
      name,
      children
    } = route;

    if (children && children instanceof Array) {
      //递归子路由、菜单
      children= parseRoutes(children);
    }

    let routeParsed = {
      path:path,
      name:name,
      children:children,
      component(resolve){
        if (component.startsWith('home')) {
          require(['../views/'+ component + '.vue'],resolve);
        }else if(component.startsWith("admin")) {
          require(['../views/admin/'+ component + '.vue'],resolve);
        }else if (component.startsWith("order")) {
          require(['../views/order/'+ component + '.vue'],resolve);
        }else if (component.startsWith("product")) {
          require(['../views/product/'+ component + '.vue'],resolve);
        }else if (component.startsWith("reporting")) {
          require(['../views/reporting/'+ component + '.vue'],resolve);
        }

      }
    }

    routesStaging.push(routeParsed);


  });

  return routesStaging;
}
