import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import MintUI from 'mint-ui'
import globelV from './API/globel_varible'
import globelF from './API/globel_function'
import echarts from 'echarts'
import $ from 'jquery'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.prototype.$echarts = echarts

Vue.prototype.$jquery = $

Vue.prototype.GLOBEL = globelV

Vue.config.productionTip = false
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(globelF)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueRouter)
Vue.use(VueResource)
