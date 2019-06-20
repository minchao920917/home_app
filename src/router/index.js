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
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/modify',
      name: 'modify',
      component: modify
    },
    {
      path: '/setpass',
      name: 'setpass',
      component: setpass
    },
    {
      path: '/agree',
      name: 'agree',
      component: agree
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: '/main/index',
          component: homeIndex,
          meta: {
            index: 1,
            keepAlive: true
          }
        },
        {
          path: '/main/news',
          component: newsIndex,
          meta: {
            index: 2,
            keepAlive: true
          }
        },
        {
          path: '/main/letter',
          component: letterIndex,
          meta: {
            index: 3,
            keepAlive: true
          }
        },
        {
          path: '/main/self',
          component: selfIndex,
          meta: {
            index: 4,
            keepAlive: true
          }
        },
        {
          path: '/main/member',
          component: member,
          meta: {
            index: 5,
            keepAlive: true
          }
        },
        {
          path: '/main/memberEdit',
          component: memberEdit,
          meta: {
            index: 5,
            keepAlive: true
          }
        },
        {
          path: '/main/notice',
          component: notice,
          meta: {
            index: 5,
            keepAlive: true
          }
        },
        {
          path: '/main/noticeAdd',
          component: noticeAdd,
          meta: {
            index: 5,
            keepAlive: true
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