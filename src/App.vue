<!--
 * @Author: your name
 * @Date: 2021-09-30 10:21:58
 * @LastEditTime: 2021-10-04 22:44:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\App.vue
-->
<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link>  -->
      <!-- <router-link to="/about">About</router-link> -->
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true
      })
    }
  }
}
</script>

<style>

</style>
