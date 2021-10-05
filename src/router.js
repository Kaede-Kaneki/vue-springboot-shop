/*
 * @Author: your name
 * @Date: 2021-09-30 10:21:58
 * @LastEditTime: 2021-10-02 21:10:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\src\router.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Regist from './views/Regist.vue'
import Login from './views/Login.vue'
import User from './views/User.vue'
import Cart from './views/Cart.vue'
import Goods from './views/Goods.vue'
import User_info from './components/User_info.vue'
import User_location from './components/User_location.vue'
import User_changeInfo from './components/User_changeInfo.vue'
import User_order from './components/User_order.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/index',
      children:[
        {
          path:'/regist',
          name:'regist',
          component: Regist,
        },
        {
          path:'/index',
          name:'index',
          component: Index,
        },
        {
          path:'/login',
          name:'login',
          component: Login,
        },
        {
          path:'/user',
          name:'user',
          component: User,
          children:[
            {
              path:'/user/info',
              name:'info',
              component:User_info
            },
            {
              path:'/user/location',
              name:'location',
              component:User_location
            },
            {
              path:'/user/changeinfo',
              name:'changeinfo',
              component:User_changeInfo
            },
            {
              path:'/user/order',
              name:'order',
              component:User_order
            },
          ]
        },
        {
          path:'/goods',
          name:'goods',
          component:Goods
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/cart',
      name:'cart',
      component: Cart,
    },
    
  ]
})
