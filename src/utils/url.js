
let DomainName,DomainT,DomainOld,DomainAll,DomainW;


if (process.env.NODE_ENV === "development") {
    DomainName = 'http://192.168.8.52:3000'
  } else {
    DomainName = ''
  }
  DomainAll = DomainName+"/api"
export default {
    
    login:DomainAll + "/login",//登录接口
    regist:DomainAll + "/regist",//注册接口

    getUserList:DomainAll + "/getUserList",//获取成员列表
    createUser:DomainAll + "/createUser",//创建新的成员
    deleteUser:DomainAll + "/deleteUser",//删除成员
    editUser:DomainAll + "/editUser",//编辑成员
    getUserInfoById:DomainAll + "/getUserInfoById",//获取成员信息

    getMyNotifyList:DomainAll + "/getMyNotifyList",//获取我的通知列表
    getOtherNotifyList:DomainAll + "/getOtherNotifyList",//获取其他人的通知列表
    addNotifies:DomainAll + "/addNotifies",//添加通知
    editNotify:DomainAll + "/editNotify",//编辑通知
    removeNotify:DomainAll + "/removeNotify",//删除通知
    getNotifyById:DomainAll + "/getNotifyById",//获取通知信息


    

    

    
}

