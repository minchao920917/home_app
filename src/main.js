// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios';
import router from './router'
import VConsole from 'vconsole'
import Vant from 'vant';
import 'vant/lib/index.css';
import { createStore } from './store'
Vue.use(Vant);
import {
  reqPos,
  reqGet,
  reqPosFor
} from './http/req';
// new VConsole()
Vue.prototype.reqPos = reqPos;
Vue.prototype.reqGet = reqGet;
Vue.prototype.reqPosFor = reqPosFor;
Vue.prototype.axios = axios
const store = createStore()
Vue.config.productionTip = false// 引入slider组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
