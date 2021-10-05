<!--
 * @Author: your name
 * @Date: 2021-10-02 15:11:41
 * @LastEditTime: 2021-10-04 16:42:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\components\User_location.vue
-->
<template>
  <div class="user_location">
    <div class="user_location_header">
      <h2>地址管理</h2>
      <el-button type="success" size="small" @click="append = true">添加</el-button>
      <el-dialog title="新增收货地址" :visible.sync="append" width="50%" :before-close="handleClose" >
        <el-form label-position="right" label-width="80px" :model="locationForm">
          <el-form-item label="收货人">
            <el-input v-model="locationForm.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="收货地址">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer" >
          <el-button @click="append = false">取 消</el-button>
          <el-button type="primary" @click="append = false" >确 定</el-button>
        </span>
      </el-dialog>

    </div>
    
    <ul>
      <li v-for="(list,index) in locationList" :key="index">
        <el-descriptions class="margin-top" :title="list.title" :column="2" size="medium" border >
          <template slot="extra">
            <el-button type="primary" size="small" @click="dialogVisible = true, num=index">修改</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </template>
          <el-descriptions-item label='收货人' labelClassName="el-icon-user dec" >
            {{list.receiver}}
          </el-descriptions-item>
          <el-descriptions-item label='手机号' labelClassName="el-icon-mobile-phone dec" >
            {{list.phone}}
          </el-descriptions-item>
          <el-descriptions-item label='收货地址' labelClassName="el-icon-office-building dec">
            {{list.location}}
          </el-descriptions-item>
      </el-descriptions>
      
      <el-dialog title="修改收货地址" :visible.sync="dialogVisible" width="50%" :before-close="handleClose" >
        <el-form label-position="right" label-width="80px" :model="locationForm">
          <el-form-item label="收货人">
            <el-input v-model="locationList[num].receiver"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="locationList[num].phone"></el-input>
          </el-form-item>
          <el-form-item label="收货地址">
            <el-input v-model="locationList[num].location"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer" >
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false" >确 定</el-button>
        </span>
      </el-dialog>
      </li>
    </ul>
     
  </div>
</template>

<script>
export default {
  data() {
      return {
        locationList:[
          {
            id:1,
            title:'收货地址1',
            receiver:'kooriookaimi',
            phone:'18100000000',
            location:'江苏省苏州市吴中区吴中大道 1188 号'
          },
          {
            id:2,
            title:'收货地址2',
            receiver:'kaneki',
            phone:'13912233765',
            location:'江苏省南通市海门区'
          }
        ],
        append: false,
        dialogVisible: false,
        num:0,
        locationForm:{
          name:'',
          tel:'',
          address:''
        }
      };
    },
    methods: {
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      a(x){
        this.num=x
        console.log(this.num);
        // return this.num
      }
    },
    mounted() {
      
    },
}
</script>

<style scoped>
.user_location{
  padding:20px 40px;
}
.user_location_header{
  margin-bottom: 20px;
}
.user_location_header h2{
  float: left;
}
.user_location_header button{
  float: right;
}
.user_location /deep/ .el-descriptions-item__label{
  width: 205px;
  height: 100%;  
  margin-bottom: -5px;

}
.user_location /deep/ .el-descriptions-item__content{
  width: 250px;
  margin-bottom: -5px;
}
.user_location /deep/.el-descriptions__header{
  margin-bottom: 5px;
}
.user_location li{
  margin-bottom: 15px;
}
.user_location_header /deep/ .el-message-box__headerbtn{
  top: 10px;
}
.user_location_header /deep/.dialog-footer button{
  float: none;
}
</style>