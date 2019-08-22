
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


    

    

    
}

