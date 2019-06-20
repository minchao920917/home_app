
export default {
    //全局toast展示控制
    showCancelToast({commit},isShow){
        commit('SHOW_CANCELTOAST',isShow)
    },
    //保存订单展示
    showOrderSucessToast({commit},isShow){
        commit('SAVE_ORDER',isShow)
    },
    //车辆信息车型搜索页设置state
    setCarInforSearchData({commit},data){
        commit('SETCARINFOR_SEARCHDATA',data)
    },
    //设置车型搜索数据
    setCarInforData({commit},data){
        commit('SETCARINFOR_DATA',data)
    },
    //删除车型搜索数据
    delCarInforData({commit}){
        commit('DELCARINFOR_SEARCHDATA')
    }
}