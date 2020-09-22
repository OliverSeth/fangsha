<template>
  <div>
    <el-button size="medium" @click="showDialog">新增</el-button>
    <el-table
      :data="tableData"
      border
      height="600"
      width="90%"
      stripe
      :row-class-name="tableRowClassName">
      <el-table-column
        fixed
        prop="serial"
        label="序号"
        width="50">
      </el-table-column>

      <el-table-column
        prop="date"
        label="日期"
        width="200">
      </el-table-column>
      <el-table-column label="设备信息">
        <el-table-column
          prop="name"
          label="设备名称"
          width="150">
        </el-table-column>
        <el-table-column label="设备厂家地址">
          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column> //
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="详细地址"
            width="600">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
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
        </el-table-column>
      </el-table-column>
    </el-table>
    <el-dialog
      title="新增加设备"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="日期">
          <el-date-picker
            v-model="form.date"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="设备名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="省份">
          <el-input v-model="form.province"></el-input>
        </el-form-item>
        <el-form-item label="市区">
          <el-input v-model="form.city"></el-input>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="邮编">
          <el-input v-model="form.zip" type="number"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="onSubmit">确定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import util from 'util'
/* eslint-disable */
export default {
  name: 'shebeixinxi',
  mounted:function(){
    this.getData();
  },
  methods: {
    getData:function(){
      // let url = this.URL_PREV + '/selectAll';
      let url = this.URL_PREV + '/executeSql';
      let sql = 'SELECT * FROM shebeixinxi order by serial asc ';
      let that = this;
      // axios.get(url).then(res=>{
      //     console.log(res.data);
      //     that.tableData = res.data;
      // }).catch(err=>{
      //     console.log(err)
      // });
      axios.post(url,{
        'sql':sql
      }).then(res=>{
        console.log(res.data);
        that.tableData = res.data;
      }).catch(err=>{
        console.log(err)
      });
    },
    del:function(row){
      let url = this.URL_PREV + '/executeSql';
      let id = row.serial;
      let sql = util.format( "delete from shebeixinxi where serial=%s",id);
      let that = this;
      axios.post(url,{
        'sql':sql
      }).then(res=>{
        that.getData();
      }).catch(err=>{
        console.log(err)
      })
    },
    update:function(row){
      this.isEdit = true;
      this.selectId = row.serial;
      let url = this.URL_PREV + '/executeSql';
      let id = row.serial;
      let name = this.form.name;
      let city = this.form.city;
      let province = this.form.province;
      let zip = this.form.zip;
      let date = this.form.date;
      let address = this.form.address;

      let sql = util.format("select * from shebeixinxi where serial=%s",id);
      let that = this;
      axios.post(url,{
        'sql':sql
      }).then(res=>{
        that.centerDialogVisible = true;
        that.form = res.data[0];
      }).catch(err=>{
        console.log(err)
      })
    },
    updateOld:function(){
      let url = this.URL_PREV + '/executeSql';
      //   let id = row.serial;
      let id = this.selectId;
      let name = this.form.name;
      let city = this.form.city;
      let province = this.form.province;
      let zip = this.form.zip;
      let date = this.form.date;
      let address = this.form.address;

      let sql = util.format("update shebeixinxi set date='%s',name='%s',province='%s',city='%s',address='%s',zip='%s' where serial=%s",date,name,province,city,address,zip,id);
      console.log(sql);
      let that = this;
      axios.post(url,{
        'sql':sql
      }).then(res=>{
        that.getData();
        that.isEdit = false;
        that.centerDialogVisible = false;
      }).catch(err=>{
        console.log(err)
      })
    },
    showDialog:function(){
      this.form.name = '';
      this.form.date = '';
      this.form.province = '';
      this.form.city = '';
      this.form.address = '';
      this.form.zip = '';
      this.centerDialogVisible = true;
    },
    addNew:function(){
      let url = this.URL_PREV + '/executeSql';
      let name = this.form.name;
      let city = this.form.city;
      let province = this.form.province;
      let zip = this.form.zip;
      let date = this.form.date;
      let address = this.form.address;
      let that = this;
      let sql = util.format("insert into shebeixinxi(date,name,province,city,address,zip) values ('%s','%s','%s','%s','%s','%s')", date,name,province,city,address,zip);
      axios.post(url,{
        'sql':sql
      }).then(res=>{
        that.getData();
        that.centerDialogVisible = false;
      }).catch(err=>{
        console.log(err)
      })
    },
    onSubmit() {
      if(this.isEdit){
        this.updateOld();
      }else{
        this.addNew();
      }
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },

  data() {
    return {
      URL_PREV:'http://localhost:3000',
      centerDialogVisible:false,
      isEdit:false,
      selectId:0,
      form: {
        name: '',
        date:'',
        province:'',
        city:'',
        address:'',
        zip:''
      },
      tableData:[]
    }
  }
}
</script>

<style>

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
