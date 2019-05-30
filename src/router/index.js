import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/regist/Index'
import login from '@/components/regist/Login'
import regist from '@/components/regist/Regist'
import modify from '@/components/regist/Modify'
import setpass from '@/components/regist/Setpass'
import agree from '@/components/regist/Agree'
import home from '@/components/home/Home'
import homeIndex from '@/components/home/Index'
import faq from '@/components/home/Faq'
import news from '@/components/home/News'
import pro from '@/components/home/Pro'

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
