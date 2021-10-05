<!--
 * @Author: your name
 * @Date: 2021-09-30 11:24:18
 * @LastEditTime: 2021-10-04 18:54:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\views\Login.vue
-->
<template>
  <div class="login">
      <el-form :model="form" class="form">
          <h3>用户登录</h3>
          <div class="user">
              <!-- <el-input class="input" v-model="form.username" placeholder="请输入用户名" prefix-icon="el-icon-user"  clearable></el-input>
              <el-input class="input" v-model="form.password" maxlength="16" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password clearable></el-input> -->

              <el-input class="input" v-model="form.userName" placeholder="请输入用户名" prefix-icon="el-icon-user"  clearable></el-input>
              <el-input class="input" v-model="form.userPwd" maxlength="16" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password clearable></el-input>
              <el-button class="submit" @click="commit">登录</el-button>
          </div>
      </el-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
          form:{
            userName: '',
            userPwd: '',
          }
      }
    },
    methods: {
        commit(){
        console.log(JSON.stringify(this.form));
         this.$axios.post("/user/dologin",JSON.stringify(this.form))
         .then(res=>{
             console.log(res)
             if(res.data=='success'){
                this.$message({
                   type:'success',
                   message:'登陆成功' 
                })
                sessionStorage.setItem('userName',this.form.userName)
                sessionStorage.setItem('userPwd',this.form.userPwd)
                this.$router.push('/index')
                location.reload()
             }else if(res.data=='error'){
                this.$message({
                   type:'error',
                   message:'用户名或密码错误' 
                })
             }
         })
         .catch(err=>{
             console.log(err)
         })

        }
        
    },
}
</script>

<style  scoped>
.form{
    /* background-color: #333; */
    width: 300px;
    height: 270px;
    margin: 0 auto;
    padding-top: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 0px 0px #3333332e;
    background-color: #3333332e;
}
.form::before{
    content: '';
    filter: blur(6px);
}
.login{
    height: 301px;
    padding: 150px 0;
}
.login h3{
    margin: 15px 0 15px 0;
    text-align: center;
}
.user .input{
    display: block;
    margin: 20px auto;
    width: 220px;
    /* height: 35px; */
    color: #333;
}
.user .submit{
    display: block;
    margin: 20px auto;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: #C0C4CC!important;
    outline: 0;
}
</style>