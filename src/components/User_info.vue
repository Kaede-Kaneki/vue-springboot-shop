<!--
 * @Author: your name
 * @Date: 2021-10-02 15:02:10
 * @LastEditTime: 2021-10-06 21:01:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\components\User_info.vue
-->
<template>
  <div class="user_info">
      <div class="user_head">
          <div class="head_aside">
            <div class="user_cover"><img src="../assets/beijing.png" alt="" style=""></div>
            <div class="user_detail">
               <h2>{{userName}}</h2>
               <span>{{s}}</span>
               <a href="javascript:;" @click="goChange()">{{'修改个人信息>'}}</a> 
                <!-- <a href="javascript:;" @click="goChange()" class="edit_cover">{{'修改头像>'}}</a>  -->
                <el-button type="text" @click="dialogFormVisible = true" style="color:#333;font-size:12px">修改头像></el-button>
                <el-dialog title="上传头像" :visible.sync="dialogFormVisible">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
            </div>
          </div>
          <div class="head_main">
              <span >账户安全:<i ref="sec">{{this.sec}}</i></span>
              <span>绑定手机:<i ref="userTel">{{this.userTel}}</i></span>
              <span>绑定邮箱:<i ref="userMail">{{this.userMail}}</i></span>
          </div>
      </div>
      <div class="user_order">
          
      </div>
  </div>
</template>

<script>
import {getTime} from '../js/getTime'
export default {
    data() {
        return {
            userName:'',
            userTel:'',
            userMail:'',
            s:'',
            dialogFormVisible: false,
            imageUrl: '',
            sec:'',
        }
    },
    methods: {
        goChange(){
            this.$router.push('/user/changeinfo')
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        judgeSec(){
            // console.log(this.$refs.userTel.object);
            console.log(this.userTel,this.userMail);
            if(this.userTel=='未绑定'&&this.userMail=='未绑定'){
                this.sec='极低'
                this.$refs.sec.style.color='#f56c6c'
            }
            else if(this.userTel=='未绑定'||this.userMail=='未绑定'){
                this.sec='一般'
                this.$refs.sec.style.color='#909399'
            }
            else if(this.userTel!='未绑定'&&this.userMail!='未绑定'){
                this.sec='较高'
                this.$refs.sec.style.color='#83c44e'
            }
        },
        judgeTel(){
            if(this.userTel===''||this.userTel==null){
                console.log(this.userTel);
                this.userTel='未绑定'
            }
            // else{
            //     var arr=this.userTel
            //     var str=''
            //     for(let i=0;i<arr.length-4;i++){
            //         str+='*'
            //     }
            //     this.userTel=arr.slice(0,3)+str+arr.slice(arr.length-2)
            // }
        },
        judgeMail(){
            if(this.userMail==''||this.userMail==null){
                console.log(this.userMail);
                this.userMail='未绑定'
            }
            else{
                console.log(this.userMail.split('@'))
                var arr1=this.userMail.split('@')[0]
                var arr2=this.userMail.split('@')[1]
                var str1=''
                for(let i=0;i<arr1.length-3;i++){
                    str1+='*'
                }
                this.userMail=arr1.slice(0,2)+str1+arr1.slice(arr1.length-1)+'@'+arr2
            }
        },
        getuserInfo(){
            var a=sessionStorage.getItem('userId')
            this.$axios.post("/user/message",a)
                .then(res=>{
                    if(res.data.message=='success'){
                        console.log(res.data);
                        this.userName=res.data.object.userName
                        this.userTel=res.data.object.userTel
                        this.userMail=res.data.object.userMail
                        this.judgeTel()
                        this.judgeMail()
                        this.judgeSec()
                    }

                })
                .catch(err=>{
                    console.log(err)
                })

        }
    },
    mounted() {
        this.userName=sessionStorage.getItem('userName')
        this.s=getTime()
        
        this.getuserInfo()

    },
}
</script>

<style scoped>
.user_info{
    padding: 15px;
}
.head_aside{
    float: left;
    width: 50%;
}
.head_main{
    float: left;
    position: relative;
    top: 50%;
    left: 5%;
    transform: translateY(45%);
    width: 50%;
}
.user_cover{
    float: left;
    width: 160px;
    height: 160px;
    border-radius: 50% ;
    margin: 20px 0 0 20px;
    border: 1px solid #616161;
}
.user_cover img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.user_detail{
    float: left;
    margin: 35px 0px 0 20px;
    /* position: relative;
    top: 50%;
    left: 5%; */
    /* transform: translateY(20%); */
}
.user_detail h2{
    font-weight: normal;
    color: #616161;
}
.user_detail span{
    margin-top: 10px;
    font-size: 14px;
}
.user_detail a{
    display: block;
    margin-top: 15px;
    font-size: 12px;
}
.user_detail .edit_cover{
    margin-top: 5px;
}
.head_aside span,.head_main span{
    display: block;
}
.head_main span{
    margin-bottom: 15px;
}
.head_main i{
    font-style: normal;
}

/* 头像 */
.user_detail /deep/ .el-upload{
    border: 1px solid #333;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>