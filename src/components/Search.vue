<!--
 * @Author: your name
 * @Date: 2021-10-01 14:34:33
 * @LastEditTime: 2021-10-01 16:03:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\components\Search.vue
-->
<template>
  <!--搜索框 -->
    <div class="search">
      <input type="text">
      <div class="btn"><a href="javascript:;"><i class="el-icon-search"></i></a></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* 搜索栏 */
.search{
  float: left;
  height: 50px;
  /* line-height: 60px; */
  margin-top: 15px;
  margin-left: 15px;
}
.search input{
  float: left;
  width: 160px;
  height: 30px;
  padding: 0 5px;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #3336;
}
.search .btn{
    display: inline-block;
    width: 50px;
    height: 32px;
    line-height: 28px;
    background-color: antiquewhite;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.search .btn:hover{
  background-color: red;
}
.search .btn a{
  vertical-align: middle;
  margin: 15px;
}
</style>