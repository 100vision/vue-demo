<template>
 <div class="tab-container">
   <div id="tab-container-header" class="tab-container-header">
     <el-input v-model="input" placeholder="请输入内容" size:small class="tab-inputbox"></el-input>
     <el-button type="primary" class=" el-icon-plus" size="small" style="margin-left: 5px" @click="addUser()">添加</el-button>
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

     <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
       <el-form :model="form">
         <el-form-item label="用户名" :label-width="formLabelWidth">
           <el-input v-model="form.name" autocomplete="off"></el-input>
         </el-form-item>
         <el-form-item label="密码" :label-width="formLabelWidth">
           <el-input v-model="form.name" autocomplete="off"></el-input>
         </el-form-item>

       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button @click="dialogFormVisible = false">取 消</el-button>
         <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
       </div>
     </el-dialog>


   </div>
 </div>
</template>

<script>
export default {
  name: "sysadm_acct",
  data() {
    return {
      user: {},
      users: [],
      search: '',
      input:'',
      dialogFormVisible:false,
      formLabelWidth:'',
      formname: '编辑用户',
      formregion:'',
      form: {

      }
    }
  },
  methods: {
    handleEdit(index, row) {
      this.showEditDialog();
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    showEditDialog() {
      this.dialogFormVisible = true
    },
    addUser() {
      this.$instance.post("/api/admin/add",user).then()
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
