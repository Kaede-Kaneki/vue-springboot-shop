/*
 * @Author: your name
 * @Date: 2021-09-30 10:59:35
 * @LastEditTime: 2021-10-07 09:14:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\plugins\element.js
 */
import Vue from 'vue'
import {Button,Input,Form,FormItem,Carousel,
        CarouselItem,Scrollbar,Upload,Dialog,
        Descriptions,DescriptionsItem,MessageBox,
        Dropdown,DropdownMenu,DropdownItem,Message,Backtop} from 'element-ui'

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message 
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Scrollbar)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Backtop)