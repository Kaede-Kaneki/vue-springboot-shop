<!--
 * @Author: your name
 * @Date: 2021-09-30 10:21:58
 * @LastEditTime: 2021-10-01 15:58:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\views\Home.vue
-->
<template>
  <div class="home">
    <el-scrollbar style="height:721px">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
    </el-scrollbar>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: hidden;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  color: #333;
}
input{
  outline: none;
  /* padding: 0 5px; */
}
.content{
  /* height: 601px; */
  padding: 0 150px;
  background-size: cover;
  /* filter: blur(5px); */
  min-height: 621px;
  z-index: -999;
}
.content::before{
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 621px;
  content: "";
  background: url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3453&q=80') no-repeat ;
  background-size: cover; 
  -webkit-filter: blur(1px);
  z-index: -1;  
}
 .is-horizontal{
  display: none;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
