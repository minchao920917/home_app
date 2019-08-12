
let DomainName,DomainT,DomainOld,DomainAll,DomainW;


if (process.env.NODE_ENV === "development") {
    DomainName = 'http://localhost:3000'
  } else {
    DomainName = ''
  }
  DomainAll = DomainName+"/api"
export default {
    
    login:DomainAll + "/login",//登录接口
    regist:DomainAll + "/regist",//注册接口


    

    

    
}

