import Vue from 'vue'
import Router from 'vue-router'

import index from '@/view/Regist/Index' //引导页
import login from '@/view/Regist/Login' //登录页
import regist from '@/view/Regist/Regist' //注册页
import modify from '@/view/Regist/Modify' //修改密码页
import setpass from '@/view/Regist/Setpass' //设置密码
import agree from '@/view/Regist/Agree' //阅读条款
import main from '@/view/Main/Index' // 首页路由
import homeIndex from '@/view/Home/Index' //首页  
import letterIndex from '@/view/Letter/Index' //提问
import newsIndex from '@/view/News/Index' //消息
import selfIndex from '@/view/self/Index' //我的
import member from '@/view/self/Member/member'  //成员管理
import memberEdit from '@/view/self/Member/memberEdit' //成员编辑
import notice from '@/view/self/Notice/notice' //通知管理
import noticeAdd from '@/view/self/Notice/noticeAdd' //添加通知

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        title:"引导页",
        index:1
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        title:"登录",
        index:2
      }
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist,
      meta:{
        title:"注册",
        index:3
      }
    },
    {
      path: '/modify',
      name: 'modify',
      component: modify,
      meta:{
        title:"修改密码",
        index:4
      }
    },
    {
      path: '/setpass',
      name: 'setpass',
      component: setpass,
      meta:{
        title:"重置密码",
        index:5
      }
    },
    {
      path: '/agree',
      name: 'agree',
      component: agree,
      meta:{
        title:"阅读",
        index:6
      }
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: '/main/index',
          component: homeIndex,
          meta:{
            title:"首页",
            index:7
          }
        },
        {
          path: '/main/news',
          component: newsIndex,
          meta:{
            title:"聊天",
            index:8
          }
        },
        {
          path: '/main/letter',
          component: letterIndex,
          meta:{
            title:"提问",
            index:9
          }
        },
        {
          path: '/main/self',
          component: selfIndex,
          meta:{
            title:"我的",
            index:10
          }
        },
        {
          path: '/self/member',
          component: member,
          meta:{
            title:"成员管理",
            index:11
          }
        },
        {
          path: '/self/memberEdit',
          component: memberEdit,
          meta:{
            title:"成员修改",
            index:12
          }
        },
        {
          path: '/self/notice',
          component: notice,
          meta:{
            title:"通知管理",
            index:13
          }
        },
        {
          path: '/self/noticeAdd',
          component: noticeAdd,
          meta:{
            title:"添加通知",
            index:14
          }
        },
      ]
    },
    
  ]
})


// {
//   path: '/home/news',
//   component: news,
//   meta: {
//     index: 2,
//     keepAlive: true
//   }
// },
// {
//   path: '/home/faq',
//   component: faq,
//   meta: {
//     index: 3,
//     keepAlive: true
//   }
// },
// {
//   path: '/self/pro',
//   component: pro,
//   meta: {
//     index: 4,
//     keepAlive: true
//   }
// }