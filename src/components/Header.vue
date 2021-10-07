<!--
 * @Author: your name
 * @Date: 2021-09-29 17:48:08
 * @LastEditTime: 2021-10-05 20:20:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot-test\src\components\Header.vue
-->
<template>
  <div class="header">
    <div class="nav">
      <h3><a href="/">超超杂货铺</a></h3>
      <!-- <ul>
        <li @click="go(index),choose(index)" v-for="(item,index) in title" :key="index"  :class="num==index? 'nav-tab':''"><a href="javascript:;">{{item}}</a></li>
      </ul> -->
       <!-- 购物车 -->
      <div class="cart" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <div class="cart_num"><a href="javascript:;" @click="goCart()"><i class="el-icon-shopping-cart-2"></i>{{'购物车('}}{{num||0}}{{')'}}</a></div>
        <div class="cart_goodsList" ref="cart_goodsList">
          <i class="triangle"></i>
          123
          <div>
            <a href="javascript:;">123456</a>
          </div>
        </div>
      </div>
      <!-- 注册/登录 -->
      <div class="reg_log" ref="reg_log">
        <div class="reg"><a href="javascript:;" @click="goRegist()">注册</a></div>
        <span>/</span>
        <div class="log"><a href="javascript:;" @click="goLogin()">登录</a></div>
      </div>

      <div class="user" ref="user">
        <el-dropdown @command="handleCommand" placement="bottom">
            <span class="el-dropdown-link">{{userName}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">个人中心</el-dropdown-item>
              <el-dropdown-item command="b">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
      

    </div>
  </div>
</template>

<script>

export default {
  inject:["reload"],
  props:["num"],
  data() {
    return {
      title:['首页','1','2','3','4','5'],
      userName:'',
    }
  },
  methods: {
    go(index){
      if(index==0){
        this.$router.push('/index')
      }
    },
    choose(index){
      this.num=index
    },
    goRegist(){
      this.$router.push('/regist')
      this.num=null
    },
    goLogin(){
      this.$router.push('/login')
      this.num=null
    },
    goUser(){
      this.$router.push('/user/info')
    },
    goCart(){
      this.$router.push('/cart')
    },
    mouseenter(){
      setTimeout(() => {
        this.$refs.cart_goodsList.style.display='block' 
        this.$refs.cart_goodsList.className='animation1'
      }, 0);
    },
    mouseleave(){
      setTimeout(() => {
        this.$refs.cart_goodsList.style.display='none'
      }, 450);
       this.$refs.cart_goodsList.className='animation2'
    },

    logout(){
      sessionStorage.clear()
      this.$router.push('/index')
      this.reload()
      this.$message({
        type:'message',
        message:'账号已退出'
      })
    },
    ifLogin(){
      if(sessionStorage.getItem('userName')==null){
        this.$refs.user.style.display='none',
        this.$refs.logout.style.display='none'
        // this.$router.push('/index')
      }else{
        this.$refs.reg_log.style.display='none'
      }
    },
    handleCommand(command) {
      if(command=='a'){
        this.goUser()
      }
      else if(command=='b'){
        this.logout()
      }
        
    }
  },
  mounted() {
    this.userName=sessionStorage.getItem('userName')
    this.ifLogin()
  },
  
}
</script>

<style scoped>
.header {
  display: block;
  width: 100%;
  height: 40px;
  background-color: #33333321;
}
.nav {
  display: block;
  /* margin-left: 60px; */
  height: 100%;
  padding: 0 150px;
  /* min-width: 850px; */
}

/* 商店名称 */
.nav h3 {
  float: left;
  line-height: 40px;
  /* margin: 0 25px 0 10px; */
}

/* 选项框 */
.nav ul li {
  display: block;
  float: left;
  text-align: center;
  line-height: 60px;
  width: 80px;
  height: 60px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.nav-tab{
  background-color: skyblue
}
.nav ul li:hover {
  background-color: skyblue;
}


/* 注册登录 */
.reg_log{
  display: block;
  float: right;
  width: auto;
  height: 40px;
  line-height: 40px;
  margin: 0px 30px 0 0px;
}
.reg,.log,span{
  float: left;
}
.log{
  float: left;
}
.reg:hover a,.log:hover a{
  text-decoration: underline;
}
/* 购物车 */
.cart{
  display: block;
  float: right;
  position: relative;
  height: 40px;
  line-height: 40px;
  width: auto;
}

.cart_num i{
  font-size: 25px;
  vertical-align: sub;
}
.cart_goodsList{
  display: none;
  position: fixed;
  top: 40px;
  right: 120px;
  width: 150px;
  height: auto;
  border: 1px solid #333;
  background-color: rgb(175, 38, 38);
  z-index: 9999;
}
.animation1{
  position: fixed;
  top: 40px;
  right: 120px;
  width: 150px;
  height: auto;
  background-color: rgb(175, 38, 38);
  animation: fadein linear 0.5s;
  z-index: 999;
}
.animation2{
  position: fixed;
  top: 40px;
  right: 120px;
  width: 150px;
  height: auto;
  background-color: rgb(175, 38, 38);
  animation: fadeout linear 0.5s;
  z-index: 999;
}
@keyframes fadein{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
@keyframes fadeout{
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}
.triangle{
  display: block;
  position: fixed;
  top: 30px;
  right: 195px;
  width: 0;
  height: 0;
  border-bottom: 10px solid #fff;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
}
/* 用户 */
.user{
  display: block;
  float: right;
  width: auto;
  height: 40px;
  margin: 0px 30px 0 0px;
  text-align: center;
  line-height: 40px;
}
.user /deep/ .el-dropdown {
    display: inline-block;
    position: relative;
    color: #333;
    font-size: 17px;
    cursor: pointer;
}
</style>
