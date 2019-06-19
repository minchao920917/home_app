import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/Regist/Index'
import login from '@/view/Regist/Login'
import regist from '@/view/Regist/Regist'
import modify from '@/view/Regist/Modify'
import setpass from '@/view/Regist/Setpass'
import agree from '@/view/Regist/Agree'
import home from '@/view/Home'
import homeIndex from '@/view/Home/Index'
import letterIndex from '@/view/Letter/Index'
import newsIndex from '@/view/News/Index'
import selfIndex from '@/view/self/Index'

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
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/index',
          component: homeIndex,
          meta: {
            index: 1,
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: newsIndex,
      children: [
        {
          path: '/news/index',
          component: newsIndex,
          meta: {
            index: 2,
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/letter',
      name: 'letter',
      component: letterIndex,
      children: [
        {
          path: '/letter/index',
          component: letterIndex,
          meta: {
            index: 3,
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/self',
      name: 'self',
      component: selfIndex,
      children: [
        {
          path: '/self/index',
          component: selfIndex,
          meta: {
            index: 4,
            keepAlive: true
          }
        }
      ]
    }
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