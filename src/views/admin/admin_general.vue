<template>
  <!-- 标签页--->
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name= "bo_acct_tab" style="width: 100%"><bo_acct_tab></bo_acct_tab></el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>

import bo_acct_tab from "../../components/backoffice/bo_acct_tab";
export default {
  name: "admin",
  components:{
    bo_acct_tab
  },

  data() {
    return {
      activeName:'bo_acct_tab'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
  .account-tab {
    width: 600px;
  }
</style>
