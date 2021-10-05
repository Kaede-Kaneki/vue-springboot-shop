<!--
 * @Author: your name
 * @Date: 2021-10-01 18:04:56
 * @LastEditTime: 2021-10-01 18:29:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\views\Cart.vue
-->
<template>
  <div class="cart">
    <div class="cart_head">
        <div class="logo"><a href="javascript:;" @click="goIndex()"><img src="../assets/logo-mi2.png" alt=""></a></div>
        <h2>我的购物车</h2>
        
    </div>
    <div class="cart_content">
        123456
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
    nme:'cart',
    components:{
        Footer
    },
    methods: {
        goIndex(){
            this.$router.push('/index')
        }
    },
}
</script>

<style scoped>
.cart::before{
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
.cart_head,.cart_content{
    padding: 0 150px;
}
.logo{
    float: left;
    width: 50px;
    height: 50px;
    
}
.logo img{
    width: 100%;
    height: 100%;
}
.cart_head h2{
    float: left;
    line-height: 50px;
    margin-left: 25px;
}
.cart_content{
    min-height: 621px;
}
.footer{
    /* width: 100%; */
}
</style>