<!--
 * @Author: your name
 * @Date: 2021-09-29 18:58:28
 * @LastEditTime: 2021-10-01 15:47:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot-test\src\components\Footer.vue
-->
<template>
  <div class="footer">
      <!-- footer -->
      <p>footer</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    display: block;
    float: left;
    /* position: absolute; */
    /* bottom: 0px; */
    text-align: center;
    margin: 0 auto;
    width: 100%;
    height: 60px;
    background-color: #333333de;
    z-index: 9;
}
.footer p{
    line-height: 60px;
}
</style>
