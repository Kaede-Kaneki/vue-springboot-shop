<!--
 * @Author: your name
 * @Date: 2021-10-02 21:02:26
 * @LastEditTime: 2021-10-05 20:17:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\views\Goods.vue
-->
<template>
  <div class="goods">
      <div class="goods_detail">
        <div class="goods_img">
          <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="item in cover" :key="item.id">
              <img :src="item.url" alt="" style="width:100%;height:100%">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="goods_calc">
          <h2>{{'小米11'}}</h2>
          <div class="goods_tag">
            <ul>
              <li v-for="(t,index) in tag" :key="t.id">{{t}}<i v-show="index!=tag.length-1">|</i></li>
            </ul>
          </div>
          <h4>{{'3999'}}</h4>
          <div class="address">
            选择收货地址
          </div>
          <div class="type">
            12346
          </div>
          <div class="buy">
            <el-button @click="addCart">加入购物车</el-button>
          </div>
        </div>
      </div>
      <div class="">

      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cover:[{url:require('../assets/goods/mi11-1.jpg')},{url:require('../assets/goods/mi11-2.jpg')}],
      desc:'1',
      tag:['骁龙888','2K AMOLED 四曲面柔性屏','1亿像素三摄','时尚轻薄机身'],
      num:0
    }
  },
  methods: {
    addCart(){
      // console.log('1')
      this.num+=1
      this.$emit('goCart',this.num)
      // this.num=0
    }
  },
}
</script>

<style scoped>
i{
  font-style: normal;
}
.goods{
  padding: 40px 0px;
}

.goods_img{
  float: left;
  width: 40%;
  height: 100%;
  background-color: pink;
}
.goods_img img{
  width: 100%;
  height: 100%;
  object-fit:contain;
}
.goods_calc{
  width: auto;
  height: 500px;
  background-color: skyblue;
}

.el-carousel__item:nth-child(2n) {
   background-color: #ffffff;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #ffffff;
}
.goods_img /deep/.el-carousel__button {
    background-color: #909399;
}
.goods_tag ul li{
  float: left;
}
.address{
  width: 100%;
  height: 100px;
  background-color: rgb(124, 124, 124)
}
</style>