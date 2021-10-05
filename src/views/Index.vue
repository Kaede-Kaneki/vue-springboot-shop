<!--
 * @Author: your name
 * @Date: 2021-09-30 11:33:49
 * @LastEditTime: 2021-10-04 17:19:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\views\Index.vue
-->
<template>
  <div class="index">
      
      <div class="index_head">
          <div class="logo" ref="logo" @mousedown="logo_down" @mouseup="logo_up"><a href="javascript:;" @click="goIndex()"><img src="../assets/超超.jpg" alt="logo"></a></div>
          <Search></Search>
      </div>
      <div class="index_banner">
          <div class="banner_aside">
              <ul>
                  <li ref="banner_menu" v-for="(item,index) in menu" :key="index" @mouseenter="mouseenter(index)" @mouseleave="mouseleave(index)">
                      <a href="javascript:;">{{item}}</a><i class="el-icon-arrow-right"></i></li>
              </ul>
              <div class="banner_goods" ref="banner_goods" @mouseenter="goods_enter()" @mouseleave="goods_leave()">
                  <ul>
                      <li v-for="item in 21" :key="item.id" @click="goGoods()">
                         <div class="banner_goodslist">
                             <img src="../assets/缩略图/civi.webp" alt="" style="width:40px ;height:40px">
                             <a>{{item }}{{num}}</a>
                        </div> 
                      </li>
                  </ul>
              </div>
          </div>
          <div class="banner_main">
               <div class="block">
                    <el-carousel trigger="click">
                    <el-carousel-item v-for="item in banner" :key="item.id">
                        <img :src="item.url" :alt="item" style="height:100% ;width:100%">
                    </el-carousel-item>
                    </el-carousel>
                </div>
          </div>
      </div>
      <div class="index_ads">
          <div>
              <ul>
                  <li v-for="(item,index) in ads" :key="index">
                      <a href="javascript:;"><img :src="item.url" alt="" style="height:100%;width:100%"></a>
                  </li>
              </ul>
          </div>
          <div>
              <img src="../assets/k40.png" alt="">
          </div>
      </div>
      <div class="index_goods">
          123456
      </div>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
 export default {
     name:'Index',
     components:{
         Search
     },
     data() {
         return {
             menu:['1','2','3','4','5','6','7','8'],
             num:'',
             banner:[{url:require('../assets/mi_civi.jpg')},{url:require('../assets/mix4.jpg')},{url:require('../assets/win.jpg')},{url:require('../assets/体温计.jpg')}],
             ads:[{url:require('../assets/mi11Ultra.jpg')},{url:require('../assets/mi11.jpg')},{url:require('../assets/小米降噪耳机Pro.png')},{url:require('../assets/mi11Ultra.jpg')}],
            //  menu:['1','2','3','4','5','6','7','8'],
         }
     },
     methods: {
         goIndex(){
            //  this.$router.push('/index')
             location.reload()
         },
         mouseenter(a){
             this.$refs.banner_goods.style.display='block'
             this.num=a
            this.$refs.banner_menu[this.num].style.backgroundColor='red'
         },
         mouseleave(a){
             this.$refs.banner_goods.style.display='none'
             this.num=a
             this.$refs.banner_menu[this.num].style.backgroundColor='transparent'
         },
         goods_enter(){
             this.$refs.banner_goods.style.display='block'
             this.$refs.banner_menu[this.num].style.backgroundColor='red'
         },
         goods_leave(){
             this.$refs.banner_goods.style.display='none'
             this.$refs.banner_menu[this.num].style.backgroundColor='transparent'
         },
         logo_down(){
             this.$refs.logo.style.marginLeft='5px'
             this.$refs.logo.style.marginTop='5px'
             this.$refs.logo.style.width='55px'
             this.$refs.logo.style.height='55px'
         },
         logo_up(){
             this.$refs.logo.style.marginLeft='0px'
             this.$refs.logo.style.marginTop='0px'
             this.$refs.logo.style.width='65px'
             this.$refs.logo.style.height='65px'
         },
         goGoods(){
             this.$router.push('/goods')
         }
     },

}
</script>

<style scoped>
/* head */
.index_head{
    float: left;
    width: 100%;
    /* height: 80px; */
    padding: 15px 0;
    
}
.logo{
    float: left;
    width: 65px;
    height: 65px;
}
.logo img{
    width: 100%;
    height: 100%;
}
.search{
    float: right;
    margin: 15px 0;
}
/* banner */
.index_banner{
    position: relative;
    float: left;
    width: 100%;
    height: auto;
    /* background-color: skyblue; */
}

/* menu */
.banner_aside{
    float: left;
    width: 260px;
    height: 100%;
    background-color: #c0c4ccab;
}
.banner_aside ul{
    padding: 20px 0;
}
.banner_aside ul li{
    padding: 13px 25px;
    text-align: left;
}
.banner_aside ul li i{
    font-style: normal;
    float: right;
}
.banner_aside ul li:hover{
    cursor: pointer;
    /* background-color: red; */
}
.banner_goods{
    display: none;
    position: absolute;
    top: 0;
    left: 260px;
    width: 100%;
    height: 100%;
    min-width: 800px;
    /* padding: 18px; */
    background-color: rgb(255, 255, 255);
    box-shadow: 20px 0px 20px 20px;
    z-index: 5;
}
.banner_goods ul{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 0px;
    /* width: 800px; */
    height: 415px;
}
.banner_goods ul li{
    width: 200px;
    margin-left: 30px;
    padding: 4px;
    float: left;
}
.banner_goods ul li:hover {
    background-color: none;
}
.banner_goodslist{
    position: relative;
    float: left;
    width: 200px;
    height: 60px;
    text-align: center;
    /* background-color: skyblue; */
}
.banner_goodslist:hover a{
    color: #ff6700;
}
.banner_goodslist img{
    position:absolute;
    top:50%; 
    left:0%;
    transform: translate(0%,-50%);
    /* vertical-align: middle; */
}
.banner_goodslist a{
    position:absolute;
    top:50%; 
    left:25%;
    transform: translate(0%,-50%);
    /* vertical-align: middle; */
}
/* 轮播图 */
.banner_main{
    height: 100%;
}
.block /deep/.el-carousel__container {
    position: relative;
    height: 415px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  /* 广告 */
  .index_ads{
      float: left;
      width: 100%;
      height: 100%;
      margin: 15px 0;
      /* padding: 25px 0; */
      /* background-color: rgba(255, 255, 255, 0.212); */
  }
  .index_ads ul{
      background-color: rgba(255, 255, 255, 0.212);
  }
  .index_ads li{
      float: left;
      width: 290px;
      height: 180px;
      margin: 15px 25px 30px 0px;
      background-color: rgb(211, 102, 102);
      transition: box-shadow ease 0.5s;
  }
  .index_ads li:nth-child(4){
      margin: 15px 0px 30px 1px;
  }
  .index_ads li:hover{
      box-shadow: 0  15px 30px rgb(0 0 0 / 10%);
  }
  .index_goods{
      float: left;
      width: 100%;
      height: 150px;
      background-color: pink;
  }
</style>