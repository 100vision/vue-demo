<template>
  <div>
    <!-- 引用公共组件header -->

    <el-form  :rules="rules"  :model="loginForm" ref="loginForm" class="loginContainer" >
      <h3 class="loginCaption">用户登录</h3>
      <el-form-item prop="username">
        <el-input type="text"  autocomplete="off" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input type="password"  autocomplete="off" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="captcha" >
        <el-input type="text"  autocomplete="off" v-model="loginForm.captcha" placeholder="请输入验证码" style="width: 200px;margin-right:250px"></el-input>
        <img :src="captchaUrl" @click="getCaptcha" >
      </el-form-item>

      <el-checkbox label="记住我" v-model="rememberMe"></el-checkbox>
      <el-button type="primary" @click="login" style="width: 100%">提交</el-button>

    </el-form>


  </div>

</template>

<script>
    //import instance from "../utils/request";

    import axios from "axios";

    export default {
        name: "Login",
      data() {
          return{
            title:'用户登录',
            loginForm:{},
            captchaUrl:'/captcha?time='+ new Date(),
            rememberMe:false,

            //表单输入校验
            rules:{
              username:[{required:true,message:"请输入用户名",trigger:'blur' }],
              password:[{required:true,message:"请输入密码",trigger:'blur' }],
              captcha:[{required:true,message:"请输入验证码",trigger:'blur' }],

          }
        }
      },
      methods:{
          login() {
            //验证验证码是否正确


            //后端的返回格式：
            // 业务成功的返回body格式：{"respStatus":0,"respMessage":"操作成功","payload":"Success","success":true}
            //业务成功后，后端把token写入到response的header["token"]
            // 业务失败的返回格式：{"respStatus":1,"respMessage":"操作失败","payload":"密码不正确!","success":false}
            //
            this.$instance.post("/login",this.loginForm)
              .then(response => {
                if(response.data.success)
                {
                  //成功登录后，拿到后端response的token并写入浏览器的local storage.
                  window.sessionStorage.setItem("token",response.headers["authorization"]);

                  //获取浏览器的referer URI
                  let path = this.$route.query.redirect;
                  console.log(path);
                  //根据referer url判断登录后的跳目标跳转页面。
                  // 1.如果referer是登录页，登录后则进入home。
                  // 2、如果referer是其他url, 登录后则路由到目标页面。
                  this.$router.push((path == '/' || path == undefined) ? '/home' : path);
                }
            }).catch(err => console.log(err));
          },
          getCaptcha() {

                    this.captchaUrl = '/captcha?time='+ new Date()
          }
      },

      create() {

      }
    }
</script>

<style scoped>
  .loginContainer {
    border-radius: 15px;
    background-clip:padding-box;
    margin:180px auto;
    width:350px;
    padding:15px 35px 15px 35px;
    background: #fff;
    border:1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .loginCaption{
       margin: 0px auto;
  }

  .el-form-item__content{
    display: flex;
    align-items: center;
  }

</style>
