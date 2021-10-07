<!--
 * @Author: your name
 * @Date: 2021-10-02 16:22:37
 * @LastEditTime: 2021-10-06 20:36:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\components\User_changeInfo.vue
-->
<template>
  <div class="user_changeInfo">
      <el-form :model="userForm" ref="userForm" class="userForm" label-position="right" label-width="150px">
          <h2>个人信息修改</h2>
          <el-form-item label="用户名"> 
              <el-input v-model="userForm.userName" clearable></el-input>
          </el-form-item>
          <el-form-item label="原密码"> 
              <el-input v-model="userForm.oldPwd" show-password clearable></el-input>
          </el-form-item>
          <el-form-item label="新密码"> 
              <el-input v-model="userForm.newPwd" show-password clearable></el-input>
          </el-form-item>
          <el-form-item label="再次输入新密码"> 
              <el-input v-model="userForm.checkPwd" show-password clearable></el-input>
          </el-form-item>
          <el-form-item label="手机号"> 
              <el-input v-model="userForm.userTel" clearable></el-input>
          </el-form-item>
          <el-form-item label="邮箱"> 
              <el-input v-model="userForm.userMail" clearable></el-input>
          </el-form-item>
          <el-form-item > 
                <el-button @click="editPost">提交</el-button>
          </el-form-item>
          
      </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            userForm:{
                userName:'',
                oldPwd:'',
                newPwd:'',
                checkPwd:'',
                userTel:'',
                userMail:'',
            },
             
        }
    },
    methods: {
        editPost(){
            var obj={
                userName: this.userForm.userName,
                userPwd: this.userForm.newPwd,
                userTel: this.userForm.userTel,
                userMail: this.userForm.userMail
            }
            console.log(obj);
            var a=sessionStorage.getItem('userId')
            console.log(JSON.stringify(a));
            this.$axios.post("/user/message",a)
                .then(res=>{
                    if(res.data.message=='success')
                    console.log(res)

                })
                .catch(err=>{
                    console.log(err)
                })
        }
    },
}
</script>

<style scoped>
.user_changeInfo{
    padding: 20px;
}
.userForm{
    margin-left: 20%;
}
.userForm h2{
    margin-left: 27%;
    margin-bottom: 22px;
}
.userForm /deep/ input{
    width: 300px;
}
</style>