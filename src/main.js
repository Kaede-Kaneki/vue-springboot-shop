/*
 * @Author: your name
 * @Date: 2021-09-30 10:21:58
 * @LastEditTime: 2021-10-01 10:11:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\main.js
 */
import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import Router from 'vue-router'


// Vue.prototype.$axios=axios
// axios.defaults.baseURL = '/api';
// Vue.use(axios)
// axios.defaults.baseURL='http://localhost:3000'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
