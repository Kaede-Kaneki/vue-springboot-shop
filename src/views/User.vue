<!--
 * @Author: your name
 * @Date: 2021-10-01 18:01:16
 * @LastEditTime: 2021-10-04 18:03:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\views\User.vue
-->
<template>
  <div class="user">
    <div class="user_nav"><a href="/">首页</a>{{'&nbsp;'+'/'+'&nbsp;'}}<a href="#" style="cursor:text">{{'个人中心'}}</a></div>
    <div class="user_aside">
      <h3>个人中心</h3>
      <ul>
        <li @click="goInfo()"><a href="javascript:;" >我的个人中心</a></li>
        <li @click="gochangeInfo()"><a href="javascript:;" >信息修改</a></li>
        <li @click="goOrder()"><a href="javascript:;">我的订单</a></li>
        <li @click="goLocation()"><a href="javascript:;">我的地址</a></li>
      </ul>
    </div>
    <div class="user_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    goInfo(){
      this.$router.push('/user/info')
    },
    gochangeInfo(){
      this.$router.push('/user/changeinfo')
    },
    goOrder(){
      this.$router.push('/user/order')
    },
    goLocation(){
      this.$router.push('/user/location')
    },
  },
}
</script>

<style scoped>
.user{
  min-height: 601px;
}
.user_nav{
  margin: 15px 0;
  font-size: 12px;
  color: #909399;
}
.user_nav a{
  font-size: 12px;
  color: #909399;
}
.user_aside{ 
  float: left;
  width: 19%;
  height: 100%;
  background-color: pink;
  min-height: 621px;
}
.user_aside h3{
  text-align: center;
  padding: 15px 0;
}
.user_aside li{
  cursor: pointer;
  text-align: center;
  padding: 15px 0;
}
.user_aside li:hover{
  background-color: green;
}
.user_content{
  float: left;
  width: 80%;
  min-height: 621px;
  margin-left: 1%;
  /* padding: 15px; */
  background-color: skyblue;
}
</style>