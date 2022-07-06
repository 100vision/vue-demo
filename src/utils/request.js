import axios from "axios"; //引入axios
import {Message, MessageBox} from "element-ui";



//创建一个全局axios对象实例，并定义所有api地址的起始Url前缀，例如api服务器主机名等
const instance = axios.create({
  baseURL:"http://localhost:8091/",
  timeout:5000,
  withCredentials: true
});


//axios请求拦截器，例如：所有请求带上token(登录成功后的token）
instance.interceptors.request.use(config=>{
  //console.log("request intercepted");
  config.headers['authorization'] = sessionStorage.getItem("token");

  return config;
});

//axios响应拦截器，例如：前端统一处理响应异常
instance.interceptors.response.use(response=>{

  //业务逻辑错误的拦截
  if(!response.data.success) {
    //后端定义的返回业务错误代码4003，token过期或是没有携带token
    if(response.data.respStatus == 4003) {
      Message.error("登录超时");
    }
    else{
      Message.error(response.data.payload);
    };

       return ;
  }
  return response;

  },err => {
    //api接口异常的拦截
    if(err.response.status == 500 || err.response.status == 504 || err.response.status == 404) {
      Message.error("服务器网络或内部异常");
    }



  }
);

export default instance;
