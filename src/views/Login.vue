<template>
  <div>
    <!-- 引用公共组件header -->
    <Header></Header>
    <h2>{{title}}</h2>
    <form>
      <input type="text" v-model="user.userName" placeholder="请输入用户名">
      <input type="text" v-model="user.password" placeholder="请输入密码">
      <input type="button" value="登录" @click="login">
    </form>



  </div>

</template>

<script>
    import instance from "../utils/request";
    import Header from "../components/Header";

    export default {
        name: "Login",
      components: {Header},
      data() {
          return{
            title:'用户登录',
            user:{}

          }
        },
      methods:{
          login() {
            //后端的返回格式：
            // 业务成功的返回body格式：{"respStatus":0,"respMessage":"操作成功","payload":"Success","success":true}
            //业务成功后，后端把token写入到response的header["token"]
            // 业务失败的返回格式：{"respStatus":1,"respMessage":"操作失败","payload":"密码不正确!","success":false}
            //
            instance.post("/user/login",this.user)
              .then(resp => {
                if(resp.data.success === true)
                {
                  //成功登录后，拿到后端response的token并写入浏览器的lcoal storage.
                  localStorage.setItem("token",resp.headers["Token"]);

                  //切换路由到主页
                  this.$router.push({name:'index'});
                }else{
                  alert(resp.data.payload);
                }
              }).catch(err=>alert("服务器异常"));

          }
      }
    }
</script>

<style scoped>

</style>
