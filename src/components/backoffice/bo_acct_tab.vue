<template>
 <div class="tab-container">
   <div id="tab-container-header" class="tab-container-header">
     <el-input v-model="input" placeholder="请输入内容"  class="tab-inputbox"></el-input>
     <el-button type="primary" class=" el-icon-plus" style="margin-left: 5px">添加</el-button>
   </div>

   <div >
     <el-table
       :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
       style="width: 100%">
       <el-table-column
         label="Date"
         prop="date">
       </el-table-column>
       <el-table-column
         label="Name"
         prop="name">
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
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: ''
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
