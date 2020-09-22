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
        prop="num"
        label="序号"
        width="50">
      </el-table-column>

      <el-table-column
        prop="rukuriqi"
        label="入库日期"
        width="200">
      </el-table-column>
      <el-table-column label="备件信息">
        <el-table-column
          prop="beijianbianhao"
          label="备件编号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="beijianmingcheng"
          label="备件名称"
          width="120">
        </el-table-column> //
        <el-table-column
          prop="fuwujian"
          label="服务件"
          width="120">
        </el-table-column>
        <el-table-column
          prop="xiangxixinxi"
          label="详细信息"
          width="600">
        </el-table-column>
        <el-table-column
          prop="shuliang"
          label="数量"
          width="120">
        </el-table-column>
        <el-table-column
          prop="yuji"
          label="预计使用日期"
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
    </el-table>
    <el-dialog
      title="新增加设备"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="入库日期">
          <el-date-picker
            v-model="form.rukuriqi"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="备件编号">
          <el-input v-model="form.beijianbianhao"></el-input>
        </el-form-item>
        <el-form-item label="备件名称">
          <el-input v-model="form.beijianmingcheng"></el-input>
        </el-form-item>
        <el-form-item label="服务件">
          <el-input v-model="form.fuwujian"></el-input>
        </el-form-item>
        <el-form-item label="详细信息">
          <el-input v-model="form.xiangxixinxi"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.shuliang" type="number"></el-input>
        </el-form-item>
        <el-form-item label="预计使用日期">
          <el-input v-model="form.yuji" type="number"></el-input>
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
  name: 'beijian',
  mounted:function(){
    this.getData();
  },
  methods: {
    getData:function(){
      // let url = this.URL_PREV + '/selectAll';
      let url = this.URL_PREV + '/executeSql';
      let sql = 'SELECT * FROM beijianxinxi order by num asc ';
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
      let id = row.num;
      let sql = util.format( "delete from beijianxinxi where num=%s",id);
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
      this.selectId = row.num;
      let url = this.URL_PREV + '/executeSql';
      let id = row.num;
      let rukuriqi = this.form.rukuriqi;
      let beijianbianhao = this.form.beijianbianhao;
      let beijianmingcheng = this.form.beijianmingcheng;
      let fuwujian = this.form.fuwujian;
      let xiangxixinxi = this.form.xiangxixinxi;
      let shuliang = this.form.shuliang;
      let yuji = this.form.yuji;


      let sql = util.format("select * from beijianxinxi where num=%s",id);
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
      let rukuriqi = this.form.rukuriqi;
      let beijianbianhao = this.form.beijianbianhao;
      let beijianmingcheng = this.form.beijianmingcheng;
      let fuwujian = this.form.fuwujian;
      let xiangxixinxi = this.form.xiangxixinxi;
      let shuliang = this.form.shuliang;
      let yuji = this.form.yuji;

      let sql = util.format("update beijianxinxi set rukuriqi='%s',beijianbianhao='%s',beijianmingcheng='%s',fuwujian='%s',xiangxixinxi='%s',shuliang='%s',yuji='%s'where num=%s",rukuriqi,beijianbianhao,beijianmingcheng,fuwujian,xiangxixinxi,shuliang,yuji,id);
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
      this.form.rukuriqi = '';
      this.form.beijianbianhao = '';
      this.form.beijianmingcheng = '';
      this.form.fuwujian = '';
      this.form.xiangxixinxi = '';
      this.form.shuliang = '';
      this.form.yuji = '';
      this.centerDialogVisible = true;
    },
    addNew:function(){
      let url = this.URL_PREV + '/executeSql';
      let rukuriqi = this.form.rukuriqi;
      let beijianbianhao = this.form.beijianbianhao;
      let beijianmingcheng = this.form.beijianmingcheng;
      let fuwujian = this.form.fuwujian;
      let xiangxixinxi = this.form.xiangxixinxi;
      let shuliang = this.form.shuliang;
      let yuji = this.form.yuji;
      let that = this;
      let sql = util.format("insert into beijianxinxi(rukuriqi,beijianbianhao,beijianmingcheng,fuwujian,xiangxixinxi,shuliang,yuji) values ('%s','%s','%s','%s','%s','%s','%s')", rukuriqi,beijianbianhao,beijianmingcheng,fuwujian,xiangxixinxi,shuliang,yuji);
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
        rukuriqi: '',
        beijianbianhao:'',
        beijianmingcheng:'',
        fuwujian:'',
        xiangxixinxi:'',
        shuliang:'',
        yuji:''
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
