import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  top:{
    isShowTop:false,//是否显示顶部
    title:"",
    rightText:""
  },


}

export function createStore() {
  return new Vuex.Store({
    state,
    actions,
    mutations
  })
}
