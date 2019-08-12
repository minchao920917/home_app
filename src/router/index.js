import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/Regist/Index'
import login from '@/view/Regist/Login'
import regist from '@/view/Regist/Regist'
import modify from '@/view/Regist/Modify'
import setpass from '@/view/Regist/Setpass'
import agree from '@/view/Regist/Agree'
import main from '@/view/Main/Index'
import homeIndex from '@/view/Home/Index'
import letterIndex from '@/view/Letter/Index'
import newsIndex from '@/view/News/Index'
import selfIndex from '@/view/self/Index'
import member from '@/view/self/member'
import memberEdit from '@/view/self/memberEdit'
import notice from '@/view/self/notice'
import noticeAdd from '@/view/self/noticeAdd'

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
        },
        {
          path: '/main/news',
          component: newsIndex,
        },
        {
          path: '/main/letter',
          component: letterIndex,
        },
        {
          path: '/main/self',
          component: selfIndex,
        },
        {
          path: '/self/member',
          component: member,
        },
        {
          path: '/self/memberEdit',
          component: memberEdit,
        },
        {
          path: '/self/notice',
          component: notice,
        },
        {
          path: '/self/noticeAdd',
          component: noticeAdd,
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