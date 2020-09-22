<template>
  <div>
    <el-button size="medium" @click="showDialognew">新增</el-button>
    <el-talbe
      :data="tableData_guzhangxinxi"
      border
      height="600"
      width="90"
      stripe
      :row-class-name="tableRowClassName_guzhangxinxi">
      <el-table-column
        fixed
        prop="num"
        label="序号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="guzhang1"
        label="故障1"
        width="200">
      </el-table-column>
      <el-table-column
        prop="guzhang2"
        label="故障2"
        width="200">
      </el-table-column>
      <el-table-column
        prop="guzhang3"
        label="故障3"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
          <el-button type="text" size="small" @click="update(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-talbe>
  </div>
</template>

<script>
import axios from 'axios'
/* eslint-disable */
export default {
  name: "guzhangxinxi",
  methods:{
    showDialognew:function(){
      this.form.guzhana1 = '';
      this.form.guzhang2 = '';
      this.form.guzhang3 = '';
    },
    tableRowClassName_guzhangxinxi({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    del:function(row){
      let id = row.num;
      let url = this.URL_PREV + '/delete';
      let that = this;
      axios.post(url, [id]).then(res=>{that.getData();}).catch(err=>{console.log(err)})
    },
    update:function(row){

    }
  }
}
</script>

<style scoped>

</style>
