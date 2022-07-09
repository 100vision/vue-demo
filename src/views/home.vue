<template>
  <div>
    <el-container>
      <el-header class="home-header">
          <div class="home-title">
            PowerOffice
          </div>
        <div>
          <el-dropdown @command="commandHandler">
  <span class="el-dropdown-link">
    {{ user.username }}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="details">个人中心</el-dropdown-item>
              <el-dropdown-item command="preference">其他信息</el-dropdown-item>
              <el-dropdown-item command="logout">退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </el-header>
      <el-container>
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu router unique-opened>
              <!-- 从路由中遍历一级菜单项 --->
              <el-submenu :index="index_L1 +''" v-for="(node_L1,index_L1) in routes" :key="index_L1">
                <template slot="title"><i class="el-icon-location"></i>
                  <span>{{node_L1.name}}</span>
                </template>
                <!-- 从路由中遍历2级菜单项(叶子) --->

                    <el-menu-item :index="node_L2.path" v-for="(node_L2,index_L2) in node_L1.children" :key="index_L2">

                      <template slot="title"><i class="el-icon-location"></i>
                        <span>{{node_L2.name}}</span></template>

                    </el-menu-item>



              </el-submenu>


            </el-menu>
        </el-aside>
        <el-main>
          <!-- 导航面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right" v-if = "this.$router.currentRoute.path != '/home'">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
          </el-breadcrumb>

          <router-view class="home-routerview"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
export default {

  name: 'home',

  data() {
    return {
        user: JSON.parse(window.sessionStorage.getItem("user"))
      }
    },


  methods:{

    //退出系统
    logout() {
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("user");

      //清空vuex里的菜单路由
      this.$store.commit('saveRoutes2Store',[]);
      //跳转到登录页
      this.$router.replace("/");
    },
    commandHandler(command) {
      if(command == 'logout') {
        this.logout();
      }
    }

  },
  computed:{
    routes(){
      return this.$store.state.routes;  //获取Vuex中的routes

    }
  }



}
</script>

<style scoped>


.el-aside {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.home-header {
  background: #0410ee;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;

}
.home-title {
  color: white;
  padding: 2px;
  font-family: "Microsoft YaHei";
  font-size: large;

}

.home-routerview {
  margin-top: 10px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}

</style>
