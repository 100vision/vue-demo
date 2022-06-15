/*let proxyCORS={}

//配置代理请求解决CORS跨域访问后端API
proxyCORS['/']={
  //webSocket
  ws:false,

  //后端api url
  target:"http://localhost:8080",

  changeOrigin:true,

  //不重写请求地址
  pathRewrite:{
    '^/':'/'
  }

}*/


//以下配置仅适用于vue2项目，如果用在vue3则不会加载，配置的代理也不会生效。需要配置config/index.js的proxyTable[]

/*module.exports = {
  devServer: {
    //当前前端服务器
    host:'localhost',
    port:8092,
    proxy: {
      target:'http://localhost:8080',
      changeOrigin:true
    },

  }
}*/
