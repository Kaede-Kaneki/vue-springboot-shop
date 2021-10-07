<!--
 * @Author: your name
 * @Date: 2021-09-30 11:36:43
 * @LastEditTime: 2021-10-06 19:58:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\views\Regist.vue
-->
<template>
  <div class="regist">
       <el-form :model="form" class="form" status-icon :rules="rules">
          <h3>用户注册</h3>
          <div class="user">
              <el-form-item prop="userName">
                  <el-input class="input" v-model="form.userName" placeholder="请输入用户名" prefix-icon="el-icon-user"  clearable></el-input>
              </el-form-item>
              <el-form-item prop="userPwd">
                  <el-input class="input" v-model="form.userPwd" maxlength="16" placeholder="请输入密码" prefix-icon="el-icon-lock" type='password' clearable></el-input>
              </el-form-item>
              <el-form-item prop="checkpwd">
                <el-input class="input" v-model="form.checkpwd"  maxlength="16" placeholder="请再次输入密码" prefix-icon="el-icon-lock" type='password' clearable></el-input>
              </el-form-item>
            <el-form-item prop="userTel">
                <el-input class="input" v-model="form.userTel" maxlength="16" placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone"  clearable></el-input>
            </el-form-item>
            <el-button class="submit" @click="submit" >注册</el-button>
              
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
            checkpwd: '',
            userTel: '',
        },
        rules: {
            userName: [{ validator: this.judge_name, trigger: 'blur' }],
            userPwd:[{ validator: this.judge_pwd ,trigger:'blur'}],
            checkpwd: [{ validator: this.judge_checkpwd, trigger: 'blur' }],
            userTel:[{ validator:this.judge_phone, trigger: 'blur'}]
        }
      }
    },
    methods: {
        judge_name(rule,value,callback){
            if(value===''){
                callback(new Error('请输入用户名'))
            }else{

                if(value==='used'){
                    callback(new Error('用户名已注册'))
                }
                else{
                    callback()
                }
                
            }
        },
        judge_pwd(rule,value,callback){
             if (value === '') {
                callback(new Error('请输入密码'));
            } else{
                callback()
            }
        },
        judge_checkpwd(rule,value,callback){
             if (value === '') {
                callback(new Error('请输入密码'));
            } else{
                if(this.form.userPwd!=value){
                    callback(new Error('两次输入密码不一致!'))
                }
                callback()
            }
        },
        judge_phone(rule,value,callback){
            if(value===''){
                callback(new Error('请输入手机号'));
            } else{
                const reg=/^[1]{1}[\d]{10}$/
                if(reg.test(value)==false){
                    callback(new Error('请输入正确的手机号'))
                }
                callback()
            }
        },
        submit(){
            var obj={
                userName: this.form.userName,
                userPwd: this.form.userPwd,
                userTel: this.form.userTel,
            }
            console.log(JSON.stringify(obj));
            if(obj.userName===''||obj.userPwd===''||obj.userTel===''){
                this.$message({
                    type:'error',
                    message:'用户名/密码/手机号不能为空'
                })
            }
            // else if(obj.userPwd!=this.form.checkpwd){
            //     console.log(obj.userPwd,this.form.checkpwd);
            //     this.$message({
            //         type:'error',
            //         message:'两次密码不一致'
            //     })
            // }
            else{
                 this.$axios.post("/user/register",JSON.stringify(obj))
                .then(res=>{
                    console.log(res)
                    if(res.status==200){
                        this.$message({
                            type:'success',
                            message:'注册成功'
                        })
                        this.$router.push('/login')
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            }
            
        }
    },
}
</script>

<style scoped>
.form{
    /* background-color: #333; */
    width: 300px;
    height: 360px;
    margin: -40px auto;
    padding-top: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 0px 0px #3333332e;
    background-color: #3333332e;
}
.form::before{
    content: '';
    filter: blur(6px);
}
.regist{
    height: 301px;
    padding: 150px 0;
}
.regist h3{
    margin: 15px 0 15px 0;
    text-align: center;
}
.user span{
    font-size: 12px;
    margin: 0 auto;
}
.user .input{
    display: block;
    margin: 0px auto 15px auto;
    width: 220px;
    /* height: 35px; */
    color: #333;
}
.user .submit{
    display: block;
    margin: 10px auto;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: #C0C4CC!important;
    outline: 0;
}
.regist /deep/ .el-form-item__error {
    color: #F56C6C;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 70%;
    left: 40px;
}
.regist /deep/ .el-form-item {
    margin-bottom: 0;
}
</style>