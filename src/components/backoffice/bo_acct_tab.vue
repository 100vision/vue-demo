<template>
 <div class="tab-container">
   <div id="tab-container-header" class="tab-container-header">
     <el-input v-model="input" placeholder="请输入内容" size:small class="tab-inputbox"></el-input>
     <el-button type="primary" class=" el-icon-plus" size="small" style="margin-left: 5px">添加</el-button>
   </div>

   <div >
     <el-table
       :data="users.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
       style="width: 80%">
       <el-table-column
         label="用户名"
         prop="username">
       </el-table-column>
       <el-table-column
         label="状态"
         prop="isEnabled">
       </el-table-column>
       <el-table-column
         align="right">
         <template slot="header" slot-scope="scope">
           <el-input
             v-model="search"
             size="mini"
             placeholder="输入关键字搜索"/>
         </template>
         <template slot-scope="scope">
           <el-button
             size="mini"
             @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
           <el-button
             size="mini"
             type="danger"
             @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
         </template>
       </el-table-column>
     </el-table>
   </div>
 </div>
</template>

<script>
export default {
  name: "sysadm_acct",
  data() {
    return {
      users: [],
      search: '',
      input:''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },

  mounted() {
    this.$instance.get("/api/admin/users").then(resp => {
      if (resp) {
        let userList = resp.data.payload;
        let users = [];
        userList.forEach(userObj => {
          let {
            username,
            isEnabled,
            roles
          } = userObj;

          let user = {
            username: userObj.username,
            isEnabled: JSON.stringify(userObj.isEnabled),
            roles: JSON.stringify(userObj.roles)
          }

          users.push(user);


        });
        this.users = users;
      }

  });
  }
}


</script>

<style scoped>

.tab-inputbox {
  margin-left: 5px;
  width:250px
}

.tab-container{
  padding-left:5px;
  display: block;

}


.tab-container-header {
  margin-left: 5px;
  display: flex;
}

.tab-container-table {
  margin-left: 1px;
}

</style>
