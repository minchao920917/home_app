// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios';
import router from './router'
import 'vant/lib/index.css';
// import slider from 'vue-concise-slider'

import {
  reqPos,
  reqGet,
  reqPosFor
} from './http/req';

Vue.prototype.reqPos = reqPos;
Vue.prototype.reqGet = reqGet;
Vue.prototype.reqPosFor = reqPosFor;
Vue.prototype.axios = axios

Vue.config.productionTip = false// 引入slider组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
