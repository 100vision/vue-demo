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
    {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
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
              <el-submenu index=":index+''" v-for="(item,index) in routes" :key="index" v-if="!item.hidden">
                <template slot="title"><i class="el-icon-location"></i>
                  <span>{{item.name}}</span>
                </template>
                  <!-- 从路由中遍历2级菜单项--->
                  <el-menu-item :index="children.path" v-for="(children,index_child) in item.children" :key="index_child">
                    {{children.name}}</el-menu-item>


              </el-submenu>


            </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
export default {

  name: 'home',

  data() {
    return{
        username:window.sessionStorage.getItem('username')
    }
  },

  methods:{

    //退出系统
    logout() {
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("username");

      //清空vuex里的菜单路由
      //this.$store.commit('saveRoutes2Store',[]);
      this.$store.commit('saveRoutes2Store',[]);
      //跳转到登录页
      this.$router.replace("/")
    },
    commandHandler(command) {
      if(command == 'logout') {
        this.logout();
      }
    }

  },
  computed:{
    routes(){
      return this.$store.state.routes;

    }
  },



}
</script>

<style scoped>


.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
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

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}

</style>
