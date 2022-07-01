<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu router>
              <!-- 从路由中遍历一级菜单项 --->
              <el-submenu index="1" v-for="(item,index) in routes" :key="index" v-if="!item.hidden">
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

  name: "home",

  data() {
    return{
      title:"我是主页",
      user:{}
    }
  },

  methods:{

  },
  computed:{
    routes(){
      return this.$store.state.routes;

    }
  }


}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

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
</style>
