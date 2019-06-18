import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/regist/Index'
import login from '@/view/regist/Login'
import regist from '@/view/regist/Regist'
import modify from '@/view/regist/Modify'
import setpass from '@/view/regist/Setpass'
import agree from '@/view/regist/Agree'
import home from '@/view/home/Home'
import homeIndex from '@/view/home/Index'
import faq from '@/view/home/Faq'
import news from '@/view/home/News'
import pro from '@/view/home/Pro'

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
        },
        {
          path: '/home/news',
          component: news,
          meta: {
            index: 2,
            keepAlive: true
          }
        },
        {
          path: '/home/faq',
          component: faq,
          meta: {
            index: 3,
            keepAlive: true
          }
        },
        {
          path: '/home/pro',
          component: pro,
          meta: {
            index: 4,
            keepAlive: true
          }
        }
      ]
    }
  ]
})
