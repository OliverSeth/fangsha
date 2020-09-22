<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form action="">
      serial::<input type="text" name="serial" v-model="serial"><br>
      date:<input type="text" name="date" v-model="date"><br>
      <button type='button' @click="addUser">提交信息</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  /* eslint-disable */
  name: 'weixiujilu',
  data () {
    return {
      serial:'',
      date:''
    }
  },
  methods:{
    addUser(){ //
      let serial = this.serial;
      let date = this.date;
      axios.post('http://localhost:3000/addUser',{
        serial,date
      }).then(res=>{
        alert('信息添加成功');
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>
